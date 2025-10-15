package com.appdev.core.caones.service;


import com.appdev.core.caones.entity.Assignment;
import com.appdev.core.caones.repository.AssignmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AssignmentService {
    private final AssignmentRepository repo;

    public AssignmentService(AssignmentRepository repo) {
        this.repo = repo;
    }

    public Assignment save(Assignment a) {
        return repo.save(a);
    }

    public List<Assignment> getAll() {
        return repo.findAll();
    }

    public Assignment getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Assignment update(Long id, Assignment a) {
        a.setAssignment_id(id);
        return repo.save(a);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}