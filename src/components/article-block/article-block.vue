<template>
  <div class="article-block" id="article">
    <div class="title">
      ПОЛЕЗНАЯ ИНФОРМАЦИЯ И ОБЗОРЫ В СМИ
    </div>
    <div class="article-content">
      <div class="nav-right"  ><img @click="nextSlid()" src="../../assets/images/arrow-right.png" alt=""></div>
      <div class="article-wrap">
        <transition name="fade" :mode="'out-in'">
          <div v-if="articleShow===0" key="group1"  class="article-container full">
            <div class="article" style="background-color: #ffb536;">
              <img src="../../assets/images/article_1.png" alt="">
              <div class="information" style="color: black">
                <div class="type" >
                  Видеобзор
                </div>
                <div class="title" style="color: black">
                  Тест автомобильных ламп ближнего света H4
                </div>
                <!--<div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean</div>-->
              </div>
              <a href="https://www.youtube.com/watch?v=fXogyhe_fM8" target="_blank" class="button" style="background-color: #7f62e5; color: white">
                Подробнее
              </a>
            </div>
            <div class="article">
              <img src="../../assets/images/article_2.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Есть ли конкретные результаты вместо обещаний?
                </div>
                <div class="answer">Мы заявляем что лампы серии F1-самые яркие лампы на рынке. и подтверждаем это, сравнивая свою продукцию, с лампами от ведущих производителей, сделав многочисленные разнообразные тестами в числе которых как тесты от ВНИИС и лабораторий МГУ им. Огарева на световой так и дорожными тестами. У ламп нет аналогов по характеристикам!  Лампа H11 имеет на 15% больший световой поток чем лучшая продукция конкурентов. Лампа Н4 дает на 42% больше света чем Osram Night Breaker Laser +130%  на ближнем свете и на 35% на дальнем свете. Можно убедится посмотрев тесты ВНИИС им Лодыгина.</div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_3.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  В чем преимущество продукции FUKUROU перед известными производителями? Как вы выбираете лучший продукт?
                </div>
                <div class="answer">Нет производителей, которые лидировали бы во всех сферах. В одних сферах лидирует один производитель, в других другой, имея привязанность к производству они продает тот продукт, который производят, не всегда лидирующий в качестве. Мы, как бренд не привязаны к конкретному производству, гибки и  изучаем все предложения на рынке и выбираем только лучший продукт в своем классе. Мы общаемся с инженерами компании, тщательное изучаем все технологии и преимущества. Затем проводим многочисленные лабораторные тесты и реальные тесты на дорогах общего пользования. И изучаем мнения авто экспертов и отзывы покупателей. Только такая работа позволяет достичь высоких результатов.
                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
          </div>
          <div v-if="articleShow===1" key="group2"  class="article-container full">
            <div class="article">
              <img src="../../assets/images/article_4.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Как влияет дополнительная освещенность на безопасность?
                </div>
                <div class="answer">Идеально чистые новые фары-явление,которое далеко не всегда можно встретить на дороге, а во время сложных погодных условий, например дождя, снегопада или тумана эффективность фар особенно падает. Освещенность ухудшается, вождение становится менее комфортным и менее безопасным. Быстрее устают глаза водителя. У ламп Fukurou отличный запас по яркости перед стандартными заводскими лампами, а световой оттенок, позволят лучше видеть дорожные препятствия на мокром асфальте, раньше различать дорожные препятствия и снизить нагрузку на зрение.

                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_5.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  На некоторых упаковках можно встретить надписи для ралли, автоспорта, не для дорог общего пользования, означает ли это что лампы будут ослеплять водителей встречного транспорта ? 
                </div>
                <div class="answer">
                          Лампы Fukurou F1 пришли из автоспорта, где требуются максимальная  надёжность и светоотдача. Fukurou F1обладают большим запасом по световому потоку, чем обычные лампы, поэтому световой поток может немного превышать нормативы, или быть на уровне верхней границы.  На ослепление встречных водителей влияет не яркость лампы,  а её светотеневая граница. А светотеневую границу формируют: лампа, правильная установка  самой лампы, отражатель фары , корректор фары, качество переднего стекла фары. У ламп Fukurou F1 максимально четкая фокусировка и СТГ.  В то же время автомобили со старыми лампами и потускневшими   фарами, могут сильно ослеплять и наверняка вам такие случаи встречались. Причина  в неотрегулированной или некачественной  оптике блока фары и некачественной лампе.


                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_6.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Поставил лампы Н4 Fukurou F1 -внешне отличий от обычной лампы нет, разве свет немного побелее, но на трассе разница очень даже видна, почему так?

                </div>
                <div class="answer">
                          Все дело в точнейшей фокусировке тела накала ламп, поэтому  свет попадает точно на дорогу, и не ослепляет водителей встречного транспорта, отсутствует  ослепление водителя встречного транспорта. Это не лампы для тюнинга и внешнего эффекта, но на неосвещенных участках дороги все преимущества в полной мере раскрываются. Также скажем,что,например, в лампе H4 очень важную роль играет так называемое ''зеркальце" под спиралью ближнего света, которое играет важную роль в формировании СТГ, форме и покрытию которого в нашей компании уделено большое внимание.



                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
          </div>
          <div v-if="articleShow===2" key="group3"  class="article-container full">
            <div class="article">
              <img src="../../assets/images/article_7.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Насколько большая светоотдача влияет на нагрев лампы. Что означают цифры в названии модели в скобках, например 60/55W(135/125W)
                </div>
                <div class="answer">Мощность ламп Fukurou F1-стандартная,свойственная определенному цоколю. Соответственно не будет никаких перегревов, риска оплавить фару и дополнительной нарузки на генератор.  Первая цифра-это мощность лампы при 12V. Вторая-косвенно характеризует светоотдачу. У ламп Fukurou F1 полное соответствие потребляемому  току написанному на упаковке. Многие производители, в том числе самые именитые иногда занижают реальные мощностные характеристики своих ламп. Мы неоднократно встречали 65 ватные лампы вместо заявленных на упаковке 55ватт. Считаем правильным не вводить потребителя в заблуждение и писать реальные электротехнические параметры. Ведь если лампа потребляет  на 18-20 % больше тока то - это излишнее тепло которое может покоробить оптику отражателя, а он как правило пластиковый покрытый алюминием и лаком.
                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_8.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Видел черные упаковки под брендом Higashi, артикулы и штрих-коды такие же как у Fukurou, есть ли отличия в продуктах?

                </div>
                <div class="answer">
                         Нет, различий нет, это тот же продукт, со временем все продукты будут выпускаться только под брендом Fukurou.



                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_9.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Почему на лампах Fukurou серии F1 не используются голубые покрытия, как у других производителей?


                </div>
                <div class="answer">
                          Голубые покрытия в лампах, существенно срезают световой поток и противоречат пониманию о максимальной светоотдаче, ведь даже небольшое  голубое напыление на части колбы отнимает значительную часть светового потока и существенно ухудшает видимость на мокром асфальте.

                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
          </div>
          <div v-if="articleShow===3" key="group4"  class="article-container full">
            <div class="article">
              <img src="../../assets/images/article_7.png" alt="">
              <div class="information">
                <div class="type">
                 Обзор
                </div>
                <div class="title">
                  Тест 10 моделей галогенных ламп H4
                </div>
              </div>
              <a href="http://led-obzor.ru/test-10-modeley-galogennyih-lamp-h4-fukurou-osram-philips-koito-piaa" target="_blank" class="button" style="background-color: #7f62e5; color: white">
                Подробнее
              </a>
            </div>
            <div class="article">
              <img src="../../assets/images/article_4.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  В каких странах производятся лампы и какие лампы лучше?
                </div>
                <div class="answer">Лампы Fukurou производятся в Японии, Корее, Германии. Во всех случаях обеспечивается максимально возможное качество и технологичность.

                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div class="article">
              <img src="../../assets/images/article_3.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  В чем отличие серий F1 и F1 Plus?
                </div>
                <div class="answer">В лампах F1 и F1 Plus используются самые передовые технологии, обе серии одинаково технологичны.  F1 Plus наша новейшая разработка. Главное отличие в том, что в F1 Plus акцент смещен на бескомпромиссные световые характеристики.  У серии F1 выше срок службы, например у лампы H7 может превышать 1000 часов при высокой световой отдаче!
                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>

          </div>
        </transition>
        <div  class="article-container mobile">
            <transition name="fade" :mode="'out-in'">
              <div v-if="countArticle===0" key="article0" class="article" style="background-color: #ffb536;">
                <img src="../../assets/images/article_1.png" alt="">
                <div class="information" style="color: black">
                  <div class="type" >
                    Видеобзор
                  </div>
                  <div class="title" style="color: black">
                    Тест автомобильных ламп ближнего света H4
                  </div>
                </div>
                <a href="https://www.youtube.com/watch?v=fXogyhe_fM8" target="_blank" class="button" style="background-color: #7f62e5; color: white">
                  Подробнее
                </a>
              </div>
            <div v-if="countArticle===1" key="article1" class="article">
              <img src="../../assets/images/article_2.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Есть ли конкретные результаты вместо обещаний?
                </div>
                <div class="answer">Мы заявляем что лампы серии F1-самые яркие лампы на рынке. и подтверждаем это, сравнивая свою продукцию, с лампами от ведущих производителей, сделав многочисленные разнообразные тестами в числе которых как тесты от ВНИИС и лабораторий МГУ им. Огарева на световой так и дорожными тестами. У ламп нет аналогов по характеристикам!  Лампа H11 имеет на 15% больший световой поток чем лучшая продукция конкурентов. Лампа Н4 дает на 42% больше света чем Osram Night Breaker Laser +130%  на ближнем свете и на 35% на дальнем свете. Можно убедится посмотрев тесты ВНИИС им Лодыгина.</div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div v-if="countArticle===2" key="article2" class="article">
              <img src="../../assets/images/article_3.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  В чем преимущество продукции FUKUROU перед известными производителями? Как вы выбираете лучший продукт?
                </div>
                <div class="answer">Нет производителей, которые лидировали бы во всех сферах. В одних сферах лидирует один производитель, в других другой, имея привязанность к производству они продает тот продукт, который производят, не всегда лидирующий в качестве. Мы, как бренд не привязаны к конкретному производству, гибки и  изучаем все предложения на рынке и выбираем только лучший продукт в своем классе. Мы общаемся с инженерами компании, тщательное изучаем все технологии и преимущества. Затем проводим многочисленные лабораторные тесты и реальные тесты на дорогах общего пользования. И изучаем мнения авто экспертов и отзывы покупателей. Только такая работа позволяет достичь высоких результатов.
                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div v-if="countArticle===3" key="article3" class="article">
              <img src="../../assets/images/article_4.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Как влияет дополнительная освещенность на безопасность?
                </div>
                <div class="answer">Идеально чистые новые фары-явление,которое далеко не всегда можно встретить на дороге, а во время сложных погодных условий, например дождя, снегопада или тумана эффективность фар особенно падает. Освещенность ухудшается, вождение становится менее комфортным и менее безопасным. Быстрее устают глаза водителя. У ламп Fukurou отличный запас по яркости перед стандартными заводскими лампами, а световой оттенок, позволят лучше видеть дорожные препятствия на мокром асфальте, раньше различать дорожные препятствия и снизить нагрузку на зрение.

                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div v-if="countArticle===4" key="article4" class="article">
              <img src="../../assets/images/article_5.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  На некоторых упаковках можно встретить надписи для ралли, автоспорта, не для дорог общего пользования, означает ли это что лампы будут ослеплять водителей встречного транспорта ? 
                </div>
                <div class="answer">
                          Лампы Fukurou F1 пришли из автоспорта, где требуются максимальная  надёжность и светоотдача. Fukurou F1обладают большим запасом по световому потоку, чем обычные лампы, поэтому световой поток может немного превышать нормативы, или быть на уровне верхней границы.  На ослепление встречных водителей влияет не яркость лампы,  а её светотеневая граница. А светотеневую границу формируют: лампа, правильная установка  самой лампы, отражатель фары , корректор фары, качество переднего стекла фары. У ламп Fukurou F1 максимально четкая фокусировка и СТГ.  В то же время автомобили со старыми лампами и потускневшими   фарами, могут сильно ослеплять и наверняка вам такие случаи встречались. Причина  в неотрегулированной или некачественной  оптике блока фары и некачественной лампе.


                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
            <div v-if="countArticle===5" key="article5" class="article">
              <img src="../../assets/images/article_6.png" alt="">
              <div class="information">
                <div class="type">
                  Вопрос/Ответ
                </div>
                <div class="title">
                  Поставил лампы Н4 Fukurou F1 -внешне отличий от обычной лампы нет, разве свет немного побелее, но на трассе разница очень даже видна, почему так?

                </div>
                <div class="answer">
                          Все дело в точнейшей фокусировке тела накала ламп, поэтому  свет попадает точно на дорогу, и не ослепляет водителей встречного транспорта, отсутствует  ослепление водителя встречного транспорта. Это не лампы для тюнинга и внешнего эффекта, но на неосвещенных участках дороги все преимущества в полной мере раскрываются. Также скажем,что,например, в лампе H4 очень важную роль играет так называемое ''зеркальце" под спиралью ближнего света, которое играет важную роль в формировании СТГ, форме и покрытию которого в нашей компании уделено большое внимание.



                </div>
              </div>
              <div class="button" @click="openAnswer($event)" >
                Ответ
              </div>
            </div>
              <div v-if="countArticle===6" key="article6" class="article">
                <img src="../../assets/images/article_7.png" alt="">
                <div class="information">
                  <div class="type">
                    Вопрос/Ответ
                  </div>
                  <div class="title">
                    Насколько большая светоотдача влияет на нагрев лампы. Что означают цифры в названии модели в скобках, например 60/55W(135/125W)
                  </div>
                  <div class="answer">Мощность ламп Fukurou F1-стандартная,свойственная определенному цоколю. Соответственно не будет никаких перегревов, риска оплавить фару и дополнительной нарузки на генератор.  Первая цифра-это мощность лампы при 12V. Вторая-косвенно характеризует светоотдачу. У ламп Fukurou F1 полное соответствие потребляемому  току написанному на упаковке. Многие производители, в том числе самые именитые иногда занижают реальные мощностные характеристики своих ламп. Мы неоднократно встречали 65 ватные лампы вместо заявленных на упаковке 55ватт. Считаем правильным не вводить потребителя в заблуждение и писать реальные электротехнические параметры. Ведь если лампа потребляет  на 18-20 % больше тока то - это излишнее тепло которое может покоробить оптику отражателя, а он как правило пластиковый покрытый алюминием и лаком.
                  </div>
                </div>
                <div class="button" @click="openAnswer($event)" >
                  Ответ
                </div>
              </div>
              <div v-if="countArticle===7" key="article7" class="article">
                <img src="../../assets/images/article_8.png" alt="">
                <div class="information">
                  <div class="type">
                    Вопрос/Ответ
                  </div>
                  <div class="title">
                    Видел черные упаковки под брендом Higashi, артикулы и штрих-коды такие же как у Fukurou, есть ли отличия в продуктах?

                  </div>
                  <div class="answer">
                           Нет, различий нет, это тот же продукт, со временем все продукты будут выпускаться только под брендом Fukurou.



                  </div>
                </div>
                <div class="button" @click="openAnswer($event)" >
                  Ответ
                </div>
              </div>
              <div v-if="countArticle===8" key="article8" class="article">
                <img src="../../assets/images/article_9.png" alt="">
                <div class="information">
                  <div class="type">
                    Вопрос/Ответ
                  </div>
                  <div class="title">
                    Почему на лампах Fukurou серии F1 не используются голубые покрытия, как у других производителей?


                  </div>
                  <div class="answer">
                            Голубые покрытия в лампах, существенно срезают световой поток и противоречат пониманию о максимальной светоотдаче, ведь даже небольшое  голубое напыление на части колбы отнимает значительную часть светового потока и существенно ухудшает видимость на мокром асфальте.

                  </div>
                </div>
                <div class="button" @click="openAnswer($event)" >
                  Ответ
                </div>
              </div>
              <div v-if="countArticle===9" key="article9" class="article">
                <img src="../../assets/images/article_9.png" alt="">
                <div class="information">
                  <div class="type">
                    Обзор
                  </div>
                  <div class="title">
                    Тест 10 моделей галогенных ламп H4


                  </div>
                </div>
                <a href="http://led-obzor.ru/test-10-modeley-galogennyih-lamp-h4-fukurou-osram-philips-koito-piaa" target="_blank" class="button" style="background-color: #7f62e5; color: white">
                  Подробнее
                </a>
              </div>
              <div v-if="countArticle===10" key="article10" class="article">
                <img src="../../assets/images/article_4.png" alt="">
                <div class="information">
                  <div class="type">
                    Вопрос/Ответ
                  </div>
                  <div class="title">
                    В каких странах производятся лампы и какие лампы лучше?
                  </div>
                  <div class="answer">Лампы Fukurou производятся в Японии, Корее, Германии. Во всех случаях обеспечивается максимально возможное качество и технологичность.

                  </div>
                </div>
                <div class="button" @click="openAnswer($event)" >
                  Ответ
                </div>
              </div>
              <div v-if="countArticle===11" key="article11" class="article">
                <img src="../../assets/images/article_3.png" alt="">
                <div class="information">
                  <div class="type">
                    Вопрос/Ответ
                  </div>
                  <div class="title">
                    В чем отличие серий F1 и F1 Plus?
                  </div>
                  <div class="answer">В лампах F1 и F1 Plus используются самые передовые технологии, обе серии одинаково технологичны.  F1 Plus наша новейшая разработка. Главное отличие в том, что в F1 Plus акцент смещен на бескомпромиссные световые характеристики.  У серии F1 выше срок службы, например у лампы H7 может превышать 1000 часов при высокой световой отдаче!
                  </div>
                </div>
                <div class="button" @click="openAnswer($event)" >
                  Ответ
                </div>
              </div>
            </transition>
          </div>
      </div>
      <div class="nav-left" @click="prewSlid()"><img @click="prewSlid()" src="../../assets/images/arrow-left.png" alt=""></div>
    </div>
  </div>
</template>

<script src="./article-block.js">

</script>

<style scoped src="./article-block.scss" lang="scss">

</style>
