---
layout: page
permalink: /publications/
title: Publications
description: †Equal Contribution, *Corresponding Author.
years: [2025, 2024, 2023, 2022, 2021, 2020]
nav: true
nav_order: 1
---

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
