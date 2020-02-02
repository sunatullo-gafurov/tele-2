import React from 'react';
import Tariff from './Components/Tariff';
import './App.css';

function App() {
  const tariffs = [
    {
      title: 'Везде онлайн',
      priceText: '',
      price: 500,
      currency: '₽',
      usageLimit: '/месяц',
      hit: ['https://msk.tele2.ru/api/media/asset?mediaId=m1310027'],
      internet: 40,
      internetUnit: 'ГБ',
      internetText: '+безлимитные',
      logos: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005', 'https://msk.tele2.ru/api/media/asset?mediaId=m220001', 'https://msk.tele2.ru/api/media/asset?mediaId=m220003', 'https://msk.tele2.ru/api/media/asset?mediaId=m220006', 'https://msk.tele2.ru/api/media/asset?mediaId=m220004', 'https://msk.tele2.ru/api/media/asset?mediaId=m1990041', 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'],
      roaming: '',
      minutes: 500,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: 50,
      messagesText: 'SMS'
    },
    {
      title: 'Мой онлайн',
      priceText: '',
      price: 400,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: 15,
      internetUnit: 'ГБ',
      internetText: '+безлимитные',
      logos: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005', 'https://msk.tele2.ru/api/media/asset?mediaId=m220001', 'https://msk.tele2.ru/api/media/asset?mediaId=m220003', 'https://msk.tele2.ru/api/media/asset?mediaId=m220006', 'https://msk.tele2.ru/api/media/asset?mediaId=m220004', 'https://msk.tele2.ru/api/media/asset?mediaId=m1990041', 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'],
      roaming: '',
      minutes: 500,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: null,
      messagesText: ''
    },
    {
      title: 'Мой онлайн+',
      priceText: '',
      price: 700,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: 30,
      internetUnit: 'ГБ',
      internetText: '+безлимитные',
      logos: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005', 'https://msk.tele2.ru/api/media/asset?mediaId=m220001', 'https://msk.tele2.ru/api/media/asset?mediaId=m220003', 'https://msk.tele2.ru/api/media/asset?mediaId=m220006', 'https://msk.tele2.ru/api/media/asset?mediaId=m220004', 'https://msk.tele2.ru/api/media/asset?mediaId=m1990041', 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'],
      roaming: 'ИНТЕРНЕТ ЗА ГРАНИЦЕЙ',
      minutes: 800,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: null,
      messagesText: ''
    },
    {
      title: 'Мой разговор',
      priceText: '',
      price: 200,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: 2,
      internetUnit: 'ГБ',
      internetText: '',
      logos: [],
      roaming: '',
      minutes: 200,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: null,
      messagesText: ''
    },
    {
      title: 'Мой Tele2',
      priceText: '',
      price: 7,
      currency: '₽',
      usageLimit: '/день',
      hit: [],
      internet: 5,
      internetUnit: 'ГБ',
      internetText: '',
      logos: [],
      roaming: '',
      minutes: null,
      minutesUnit: '',
      minutesText: '+ безлимит на Tele2',
      messages: null,
      messagesText: ''
    },
    {
      title: 'Безлимит',
      priceText: '',
      price: 650,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: null,
      internetUnit: '',
      internetText: 'БЕЗЛИМИТНЫЙ ИНТЕРНЕТ',
      logos: [],
      roaming: '',
      minutes: 500,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: 50,
      messagesText: 'SMS'
    },
    {
      title: 'Премиум',
      priceText: '',
      price: 1500,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: 50,
      internetUnit: 'ГБ',
      internetText: 'БЕЗЛИМИТНЫЙ ИНТЕРНЕТ',
      logos: [],
      roaming: '',
      minutes: 2000,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: 500,
      messagesText: 'SMS'
    },
    {
      title: 'Классический',
      priceText: 'Без абонентской платы',
      price: '',
      currency: '',
      usageLimit: '',
      hit: [],
      internet: null,
      internetUnit: '',
      internetText: '',
      logos: [],
      roaming: '',
      minutes: null,
      minutesUnit: '',
      minutesText: '',
      messages: null,
      messagesText: ''
    },
    { 
      title: 'Интернет для устройств',
      priceText: 'Без абонентской платы',
      price: '',
      currency: '',
      usageLimit: '',
      hit: [],
      internet: null,
      internetUnit: '',
      internetText: '',
      logos: [],
      roaming: '',
      minutes: null,
      minutesUnit: '',
      minutesText: '',
      messages: null,
      messagesText: ''
    },
    {
      title: 'Интернет для вещей',
      priceText: '',
      price: 100,
      currency: '₽',
      usageLimit: '/месяц',
      hit: [],
      internet: 300,
      internetUnit: 'МБ',
      internetText: '',
      logos: [],
      roaming: '',
      minutes: 30,
      minutesUnit: 'мин.',
      minutesText: '+ безлимит на Tele2',
      messages: 100,
      messagesText: 'SMS'
    }
  ];
  return (
    <div className="App">
      <h1>Тарифы</h1>
      {tariffs.map(tariff => <Tariff title={tariff.title} priceText={tariff.priceText} price={tariff.price} currency={tariff.currency} usageLimit={tariff.usageLimit} hit={tariff.hit} internet={tariff.internet} internetUnit={tariff.internetUnit} internetText={tariff.internetText} logos={tariff.logos} roaming={tariff.roaming} minutes={tariff.minutes} minutesUnit={tariff.minutesUnit} minutesText={tariff.minutesText} messages={tariff.messages} messagesText={tariff.messagesText} />)}
    </div>
  );
}

export default App;