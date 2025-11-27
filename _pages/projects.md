---
layout: page
title: Projects
permalink: /projects/
description: Research projects and ongoing work at AIES Lab
nav: true
nav_order: 3
display_categories: [active]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <h2 class="category">{{ category | capitalize }} Projects</h2>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endfor %}
{% else %}
  <!-- Display all projects without categories -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
