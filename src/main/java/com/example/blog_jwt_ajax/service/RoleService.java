package com.example.blog_jwt_ajax.service;


import com.example.blog_jwt_ajax.model.Role;


public interface RoleService {
    Iterable<Role> findAll();


    void save(Role role);

    Role findByName(String name);
}
