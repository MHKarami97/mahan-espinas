---
layout: default
title: خانه
description: "معرفی موسسه ماهان اسپیناس، دوره‌های آموزشی Tour Leader و خدمات آموزشی مرتبط"
---

<section class="hero">
  <div class="hero-media"></div>
  <div class="container hero-content">
    <span class="eyebrow-tag">موسسه آموزشی در کرج</span>
    <h1>{{ site.data.site.hero_title }}</h1>
    <p>{{ site.data.site.hero_text }}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/courses/' | relative_url }}">{{ site.data.site.cta_primary }}</a>
      <a class="btn btn-secondary" href="{{ '/about/' | relative_url }}">{{ site.data.site.cta_secondary }}</a>
    </div>
    <div class="stats-strip">
      {% for stat in site.data.site.stats %}
      <div class="stat-item">
        <span class="stat-number">{{ stat.number }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <span class="section-kicker">دوره‌های پیشنهادی</span>
    <h2>مسیر آموزشی طراحی‌شده برای ورود حرفه‌ای به صنعت گردشگری</h2>
    <div class="grid grid-3">
      {% for item in site.data.site.highlights %}
      <article class="feature-card">
        <div>
          <span class="card-tag">{{ item.tag }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
        <a class="text-link" href="{{ '/courses/' | relative_url }}">مشاهده جزئیات دوره</a>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" style="background:var(--color-surface-soft)">
  <div class="container">
    <span class="section-kicker">مسیر ثبت‌نام</span>
    <h2>چهار مرحله ساده تا دریافت مدرک تورلیدری</h2>
    <div class="steps-row">
      {% for step in site.data.site.steps %}
      <div class="step-item">
        <span class="step-number">{{ forloop.index }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <span class="section-kicker">نظر هنرجویان</span>
    <h2>تجربه واقعی افرادی که این مسیر را طی کرده‌اند</h2>
    <div class="testimonial-grid">
      {% for t in site.data.site.testimonials %}
      <article class="testimonial-card">
        <p>&laquo;{{ t.text }}&raquo;</p>
        <span class="testimonial-author">{{ t.name }}</span>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <span class="section-kicker">صفحات سایت</span>
    <h2>تمام بخش‌های پایه برای یک موسسه آموزشی اضافه شد</h2>
    <div class="grid grid-4">
      <article class="resource-card"><h3>درباره موسسه</h3><p>هویت، ماموریت، مزیت‌ها و مسیر کاری موسسه.</p><a class="text-link" href="{{ '/about/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>دوره‌ها</h3><p>معرفی دوره‌های Tour Leader و کارگاه‌های مکمل.</p><a class="text-link" href="{{ '/courses/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>مدارک</h3><p>ساختار نمایش گواهی‌ها، شرایط و مدارک ثبت‌نام.</p><a class="text-link" href="{{ '/documents/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>فایل‌های درسی</h3><p>دانلود جزوه، سرفصل و منابع هر ترم.</p><a class="text-link" href="{{ '/resources/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>مدرسین</h3><p>معرفی اساتید و حوزه تخصص آن‌ها.</p><a class="text-link" href="{{ '/teachers/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>اخبار و اطلاعیه‌ها</h3><p>اطلاع‌رسانی دوره‌ها، ثبت‌نام و تغییر برنامه‌ها.</p><a class="text-link" href="{{ '/news/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>سوالات متداول</h3><p>پاسخ سریع به سوالات ثبت‌نام و فرایند آموزشی.</p><a class="text-link" href="{{ '/faq/' | relative_url }}">مشاهده صفحه</a></article>
      <article class="resource-card"><h3>تماس با ما</h3><p>فرم درخواست، آدرس و راه‌های ارتباطی.</p><a class="text-link" href="{{ '/contact/' | relative_url }}">مشاهده صفحه</a></article>
    </div>
  </div>
</section>

{% include cta-strip.html %}
