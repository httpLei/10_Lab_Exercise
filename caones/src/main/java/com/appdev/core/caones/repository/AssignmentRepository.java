package com.appdev.core.caones.repository;

import com.appdev.core.caones.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}