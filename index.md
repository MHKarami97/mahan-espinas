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
      <a class="link-cta" href="{{ '/courses/' | relative_url }}">{{ site.data.site.cta_primary }}</a>
      <a class="link-cta" href="{{ '/about/' | relative_url }}">{{ site.data.site.cta_secondary }}</a>
    </div>
    <div class="hero-card">
      <div>
        <strong>دوره‌های هدفمند</strong>
        <span>برنامه‌ریزی برای آموزش، معرفی مسیر شغلی و دسترسی به فایل‌های درسی.</span>
      </div>
      <div>
        <strong>انتشار استاتیک</strong>
        <span>قابل استقرار روی GitHub Pages با Jekyll و نگهداری ساده.</span>
      </div>
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
