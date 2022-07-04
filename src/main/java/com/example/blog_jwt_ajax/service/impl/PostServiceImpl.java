package com.example.blog_jwt_ajax.service.impl;

import com.example.blog_jwt_ajax.model.Post;
import com.example.blog_jwt_ajax.repository.IPostRepository;
import com.example.blog_jwt_ajax.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostServiceImpl implements IPostService {
    @Autowired
    IPostRepository postRepository;

    @Override
    public Iterable<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> findById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void remove(Long id) {
        postRepository.deleteById(id);
    }

    public Iterable<Post> findAllByUser_Username(String username){
        return postRepository.findAllByUserUsername(username);
    }

    public Iterable<Post> findAllByUserId(Long id) {
        return postRepository.findAllByUserId(id);
    }
}
