به نام خدا

# استقرار یک نرم افزار با معماری MicroService به کمک Docker
## روال انجام آزمایش
یک RESTful API را در نظر بگیرید که یک عملیات CRUD ساده را ارائه می‌دهد، از قابلیت load balancing پشتیبانی می‌کند و سرویس‌های backend آن یک پایگاه‌داده‌ی مشترک دارند. این سامانه را با معماری Microservice ایجاد و به وسیله‌ی Docker و Docker-Compose مستقر کنید. در زیر طرح کلی این سامانه را مشاهده می‌کنید:
![image](https://github.com/ssc-public/Software-Engineering-Lab/assets/45389673/1011dfcf-941f-4fc0-835f-197ab7b6664b)

شرح پروژه:
کانسپت این پروژه یک بلاگ است که در آن کاربران اکاانت می سازند و وارد می شوند، پیست می گذارند و کامنت می گذارند. هر کاربر که وارد می شود آیدی دارد که با آن می تواند پست بسازد و مانت بگذارد. پس دو سرویس user  و post  داریم. 
علاوه بر آن به نکات زیر نیز توجه کنید:
1. برای تمامی سرویس‌هایی که ایجاد کرده‌اید، Dockerfile تهیه کنید. می‌توانید از image های آماده نیز استفاده کنید.
![msg193224707-1524230](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/f1bdd37a-7815-462d-821f-3e8f0c87371a)
-ساختار پروژه 
![msg193224707-1524232](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/d8e3bb49-3c9a-4563-98e0-4a41a719cb55)
-dockerfile
![msg193224707-1524231](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/6be26733-6f9e-4dcf-87cf-e2c62dbfa76f)
- docker compose
در بخش بیرونی پروژه یک فایل docker compose  می سازیم که سرویس ها را کنار هم قرار دهد. دو image برای دو سرویس‌مان می سازیم. دو image آماده استفاده می کنیم  mongo و mongo express برای پایگاه داده. 
2. با کمک Docker Compose، تمامی Dockerfile ها را build و اجرا نمایید.
docker compose up -d
3. دستورات زیر را اجرا کنید. وجودِ image ها و container های مربوط به سرویس‌های خود در خروجی آن‌ها را نشان دهید:
- `docker container ls`
![msg193224707-1524233](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/3d791049-7b76-4de2-91ea-98552334247d)

- `docker image ls`
![msg193224707-1524234](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/ab4aa939-9a2d-4b77-a021-2ce34c4d358c)

5. در مرورگر، Postman یا نرم‌افزار‌ی مشابه، اجرای موفقیت‌آمیز سامانه‌ی ایجاد‌شده را نشان دهید.
![msg193224707-1524235](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/fdfe9ad8-ac14-4072-b4f0-06cfaa4b90d9)
![msg193224707-1524236](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/8d5543d9-f361-46d2-93e8-8eb7fb187123)
![msg193224707-1524237](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/65ad8c02-b086-47a6-a41f-2203dee447f8)
![msg193224707-1524238](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/3bd3c34a-ec52-47db-8185-8f4c1e8248ec)
![msg193224707-1524239](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/f3d59e98-aafd-44f8-aae3-fdb43ace1485)
![msg193224707-1524240](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/34db8b7c-d128-44b6-b69b-db6a82f35939)
![msg193224707-1524241](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/0a9e0b41-51a2-4c2d-8388-2ac1149a21ab)


6. با کمک شما فروش شرکت زیاد شده و از این رو فشار روی سرویس backend در حال افزایش است. خوشبختانه هنوز پایگاه‌داده می‌تواند فشار این حجم از مشتریان را تحمل کند. تغییرات کمینه‌ای را انجام دهید تا فشار روی سرویس‌های backend را کنترل کند.
در این مرحله برای حل این مشکل سرویس ها را به سرویس کوچک تر تقسیم می کنیم. در اینجا ما در سرویس post ، یک سرویس comment استراج کردیم. پس از افزودن کد های لازم برای این سرویس در فایل docker compose  یک image  برای آن اضافه می کنیم و مجدد پروژه را بالا می آوریم. در ادامه  api جدید را روی postman اجرا می کنیم و کارایی پروژه را چک می کنیم. 


![msg193224707-1524244](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/8e5587d3-45ed-41d3-a853-821f8bcfd77d)

-ساختار جدید پروژه 


![msg193224707-1524245](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/02bc6b53-b921-4395-8b46-3c248d643c34)


- سرویس جدید کامنت در docker-compose

![msg193224707-1524246](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/5e473472-93c3-49da-a770-116ac7253645)


- لیست container ها و image ها بعد از اضافه کردن سرویس جدید 

![msg193224707-1524247](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/d73056ac-55a5-4082-8176-3ba65b1d9590)

![msg193224707-1524248](https://github.com/Negarnbkhti42/SE-Lab-docker/assets/62252489/5ab29b79-24f1-47fa-9930-312a9aff5c95)


- عملکرد سرویس جدید 


## پرسش‌ها
1. مفهوم stateless به چه معناست؟ ما چه استفاده‌ای از این مفهوم در آزمایش خود کرده‌ایم؟

پاسخ پرسش‌های بالا را هم در ادامه‌ی فایل README بنویسید.
