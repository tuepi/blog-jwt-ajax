package com.example.blog_jwt_ajax.repository;

import com.example.blog_jwt_ajax.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPostRepository extends JpaRepository<Post, Long> {
    Iterable<Post> findAllByUserUsername(String username);

    Iterable<Post> findAllByUserId(Long id);

}
