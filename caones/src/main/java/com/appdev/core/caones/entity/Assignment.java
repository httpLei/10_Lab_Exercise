package com.appdev.core.caones.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assignment_id;

    private String title;
    private String description;
    private LocalDate due_date;

    // Getters and Setters
    public Long getAssignment_id() { return assignment_id; }
    public void setAssignment_id(Long assignment_id) { this.assignment_id = assignment_id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getDue_date() { return due_date; }
    public void setDue_date(LocalDate due_date) { this.due_date = due_date; }
}
