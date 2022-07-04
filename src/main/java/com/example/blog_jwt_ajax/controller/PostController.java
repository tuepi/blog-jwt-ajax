package com.example.blog_jwt_ajax.controller;

import com.example.blog_jwt_ajax.model.Post;
import com.example.blog_jwt_ajax.service.impl.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class PostController {
    //@All "Viết API, AJAX làm bài toán blog:
    //người dùng đang đăng nhập có thể đăng bài
    //Người dùng có thể tìm kiếm bài theo tên tác giả
    //Người dùng có thể xem toàn bộ danh sách bài viết,
    //nếu người đang đăng nhập là tác giả thì có thể sửa và xóa bài viết"
    @Autowired
    PostServiceImpl postService;

    @GetMapping("/posts")
    public ResponseEntity<Iterable<Post>> findAll() {
        List<Post> products = (List<Post>) postService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updateProduct(@PathVariable Long id, @RequestBody Post product) {
        Optional<Post> productOptional = postService.findById(id);
        if (!productOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        product.setId(productOptional.get().getId());
        return new ResponseEntity<>(postService.save(product), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Post> showViewById(@PathVariable Long id) {
        Optional<Post> product = postService.findById(id);
        return product.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Optional<Post> questionOptional = postService.findById(id);
        if (!questionOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        postService.remove(id);
        return new ResponseEntity<>(questionOptional.get(), HttpStatus.OK);
    }


}
