import FirstImg1n1 from '@/assets/images/openNews/news1.1.jpg';
import FirstImg1n2 from '@/assets/images/openNews/news1.2.jpg';
import FirstImg1n3 from '@/assets/images/openNews/news1.3.jpg';
import FirstImg2n1 from '@/assets/images/openNews/news2.1.jpg';
import FirstImg2n2 from '@/assets/images/openNews/news2.2.jpg';
import FirstImg2n3 from '@/assets/images/openNews/news2.3.jpg';
import FirstImg2n4 from '@/assets/images/openNews/news2.4.jpg';
import FirstImg2n5 from '@/assets/images/openNews/news2.5.jpg';
import FirstImg2n6 from '@/assets/images/openNews/news2.6.jpg';
import FirstImg2n7 from '@/assets/images/openNews/news2.7.jpg';
import FirstImg2n8 from '@/assets/images/openNews/news2.8.jpg';
import FirstImg3n1 from '@/assets/images/openNews/news3.1.jpg';
import logoImage from '@/assets/images/logoCircle.png';

export interface imageProps {
  id: number;
  image: string;
}

export interface newListProps {
  id: number | string;
  mainImage: string;
  team: string;
  teamName: string;
  title: string;
  text: string;
  date: string;
  images: imageProps[];
  logo: string;
  personName: string;
  gratitude: string;
  short_description: string;
  created_at: string;
  main_image: string;
}

export const newsList: newListProps[] = [
  {
    id: 1,
    mainImage: FirstImg1n3,
    team: 'Команда',
    teamName: '«Новости Добрых Деяний»',
    title: 'Ваши Истории: Вдохновение и Признание',
    text: `По итогам регионального этапа Международной Премии #МыВместе команда Новостей Добрых Деяний удостоена высокой награды - победитель в номинации «Медиапроект»!
      Глава Республики Крым Сергей Валерьевич Аксёнов лично вручил диплом победителям и пожелал удачи нашей команде в дальнейшей деятельности!
      Большим счастьем было встретить на мероприятии, героев наших историй Евгения Пичугина "Команда Возможностей" и Дарью Коваленко "Экодвижуха", которые так же получили дипломы победителей! Гордимся Вами!`,
    date: '19.10.2023',
    images: [
      {
        id: 1,
        image: FirstImg1n1,
      },
      {
        id: 2,
        image: FirstImg1n2,
      },
      {
        id: 3,
        image: FirstImg1n3,
      },
    ],
    logo: logoImage,
    personName: 'Сергей Валерьевич Аксёнов',
    gratitude: `От всего сердца благодарим за доброту и искреннее участие! Вы вдохновили
            нас своим поступком и показали, как важно дарить тепло и заботу тем, кто в этом
            особенно нуждается. Ваша поддержка принесла радость и свет в жизни пожилых людей, и
            мы гордимся, что среди нас есть такие замечательные люди, как вы.
            Спасибо за то, что делаете этот мир лучше!`,
    short_description: 'Команда Новостей Добрых Деяний удостоена высокой награды.',
    created_at: '2023-10-19',
    main_image: FirstImg1n3,
  },
  {
    id: 2,
    mainImage: FirstImg2n1,
    team: 'Команда',
    teamName: '«Новости Добрых Деяний»',
    title: 'Ваши Истории: Вдохновение и Признание',
    text: `Наш журнал! В верстке и в печатном издании. Друзья, спасибо, что Вы с нами!
      Иногда мне кажется, что весь мой путь вел меня именно к этому проекту. 
      Учеба на дизайнера, бесконечные социальные проекты, волонтерская деятельность, работа в типографиях, в журнале, любовь к книгам, любовь к людям. 
      Все это собралось воедино и стало проектом "Новости добрых деяний". 
      Не всегда хватает сил, не всегда есть уверенность, что это нужное и важное дело. Но есть наша команда и есть любимые подписчики! 
      Все это медленно, но верно, двигает нас вперед! Благодарим!!!`,
    date: '22.02.2024',
    images: [
      {
        id: 1,
        image: FirstImg2n1,
      },
      {
        id: 2,
        image: FirstImg2n2,
      },
      {
        id: 3,
        image: FirstImg2n3,
      },
      {
        id: 4,
        image: FirstImg2n4,
      },
      {
        id: 5,
        image: FirstImg2n5,
      },
      {
        id: 6,
        image: FirstImg2n6,
      },
      {
        id: 7,
        image: FirstImg2n7,
      },
      {
        id: 8,
        image: FirstImg2n8,
      },
    ],
    logo: logoImage,
    personName: 'Друг',
    gratitude: `От всего сердца благодарим за доброту и искреннее участие! Вы вдохновили
            нас своим поступком и показали, как важно дарить тепло и заботу тем, кто в этом
            особенно нуждается. Ваша поддержка принесла радость и свет в жизни пожилых людей, и
            мы гордимся, что среди нас есть такие замечательные люди, как вы.
            Спасибо за то, что делаете этот мир лучше!`,
    short_description: 'Наш журнал в верстке и в печатном издании.',
    created_at: '2024-02-22',
    main_image: FirstImg2n1,
  },
  {
    id: 3,
    mainImage: FirstImg2n8,
    team: 'Команда',
    teamName: '«Новости Добрых Деяний»',
    title: 'Ваши Истории: Вдохновение и Признание',
    text: `А вы знаете, что осенью наш проект Новости Добрых Деяний (пишущим редактором которого я являюсь) занял I место в регионального этапе Международного конкурса #Мывместе
      И глава Республики Крым лично вручил нам награду.
      У меня в руках диплом и благодарность за личный вклад в победу.
      Однако это я хотела бы поблагодарить команду:
      Спасибо, ребята, за возможность быть причастной к нашему большому делу!
      Друзья, если вы ещё не с нами, приглашаю вас поддержать наш журнал подпиской и лайками:
      Новости Добрых Деяний
      Жмите на ссылку ⬆ и на «подписаться»
      И пусть в вашей жизни будет больше добрых новостей!`,
    date: '04.04.2024',
    images: [
      {
        id: 1,
        image: FirstImg3n1,
      },
    ],
    logo: logoImage,
    personName: 'Сергей Валерьевич Аксёнов',
    gratitude: `От всего сердца благодарим за доброту и искреннее участие! Вы вдохновили
            нас своим поступком и показали, как важно дарить тепло и заботу тем, кто в этом
            особенно нуждается. Ваша поддержка принесла радость и свет в жизни пожилых людей, и
            мы гордимся, что среди нас есть такие замечательные люди, как вы.
            Спасибо за то, что делаете этот мир лучше!`,
    short_description: 'Проект Новости Добрых Деяний занял I место.',
    created_at: '2024-04-04',
    main_image: FirstImg2n8,
  },
];
