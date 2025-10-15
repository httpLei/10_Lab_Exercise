package com.appdev.core.caones.controller;


import com.appdev.core.caones.entity.Chats;
import com.appdev.core.caones.service.ChatsService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/chats")
public class ChatsController {
    private final ChatsService service;

    public ChatsController(ChatsService service) {
        this.service = service;
    }

    @PostMapping
    public Chats create(@RequestBody Chats chat) {
        return service.save(chat);
    }

    @GetMapping
    public List<Chats> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Chats getChatById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Chats update(@PathVariable Long id, @RequestBody Chats chat) {
        return service.update(id, chat);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}