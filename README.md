# Mahan Espinas Jekyll Site

## Pages included
- `/` خانه
- `/about/` درباره موسسه
- `/courses/` دوره‌ها
- `/documents/` مدارک و گواهی‌ها
- `/resources/` فایل‌های درسی
- `/teachers/` مدرسین
- `/news/` اخبار و اطلاعیه‌ها
- `/faq/` سوالات متداول
- `/contact/` تماس با ما

## Run locally
```bash
bundle install
bundle exec jekyll serve --baseurl=""
```

## Deploy on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this project to the repository root.
3. In GitHub Pages settings, publish from the default branch root.
4. GitHub Pages can build and host Jekyll sites directly.

## Important editable files
- `_data/site.yml` برای اطلاعات تماس و متن‌های اصلی
- `index.md` برای صفحه اصلی
- پوشه‌های `about`, `courses`, `documents`, `resources`, `teachers`, `news`, `faq`, `contact`
- `assets/css/style.css` برای استایل
- `assets/js/site.js` برای رفتار سمت کلاینت
