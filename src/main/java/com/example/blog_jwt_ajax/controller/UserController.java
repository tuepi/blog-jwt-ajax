package com.example.blog_jwt_ajax.controller;

import com.example.blog_jwt_ajax.model.Post;
import com.example.blog_jwt_ajax.model.User;
import com.example.blog_jwt_ajax.service.UserService;
import com.example.blog_jwt_ajax.service.impl.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@PropertySource("classpath:application.properties")
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PostServiceImpl postService;

    @GetMapping
    public ResponseEntity<Iterable<User>> showAllUser() {
        Iterable<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getProfile(@PathVariable Long id) {
        Optional<User> userOptional = this.userService.findById(id);
        return userOptional.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/post")
    public ResponseEntity<Post> saveProduct(@RequestBody Post product) {
        return new ResponseEntity<>(postService.save(product), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUserProfile(@PathVariable Long id, @RequestBody User user) {
        Optional<User> userOptional = this.userService.findById(id);
        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        user.setId(userOptional.get().getId());
        user.setEnabled(userOptional.get().isEnabled());
        user.setRoles(userOptional.get().getRoles());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setConfirmPassword(passwordEncoder.encode(user.getConfirmPassword()));
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/find-by-username/{username}")
    public ResponseEntity<Iterable<Post>> findAllByUser_Username(@PathVariable String username) {
        Iterable<Post> posts = postService.findAllByUser_Username(username);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/find-by-userid/{id}")
    public ResponseEntity<Iterable<Post>> findAllByUserId(@PathVariable Long id) {
        Iterable<Post> posts = postService.findAllByUserId(id);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }
}
