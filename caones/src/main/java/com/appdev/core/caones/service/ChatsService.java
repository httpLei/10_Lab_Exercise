package com.appdev.core.caones.service;

import com.appdev.core.caones.entity.Chats;
import com.appdev.core.caones.repository.ChatsRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ChatsService {
    private final ChatsRepository repo;

    public ChatsService(ChatsRepository repo) {
        this.repo = repo;
    }

    public Chats save(Chats chat) {
        return repo.save(chat);
    }

    public List<Chats> getAll() {
        return repo.findAll();
    }

    public Chats getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Chats update(Long id, Chats chat) {
        chat.setChat_id(id);
        return repo.save(chat);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
