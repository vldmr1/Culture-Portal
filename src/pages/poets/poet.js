import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Video from "../../components/Video/Video"
import TimeLine from "../../components/Timeline/Timeline"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"


const info = [ //*****Only for example*****
  {time: "1917-1930", title: "Рождение", desc: "Родился 10 (23 августа) 1917 года в Ревеле (ныне Таллин, Эстония) в крестьянской семье, куда его родители переехали из Бегомля в поисках заработка. Семья была в очень тяжёлом положении: отец Пимена был на фронте и мать, Дарья Фокеевна, осталась одна с двумя детьми в неродном городе. В 1920 году она вместе с детьми вернулась на свою родину в Бегомль, в котором Пимен и провёл детство."},
  {time: "1933-1939", title: "Обучение и первый опыт написания", desc: "В 1933 году семья переехала в Бобруйск. Пимен начал работать на деревообрабатывающем комбинате, а после поступил на учительские курсы. Через год, окончив курсы, начал работать учителем в школах Бобруйского и Кировского районов. Одновременно учился на заочном отделении филологического факультета Минского учительского института, который закончил в 1939 году. Стихи начал писать в юности. Дебютировал в 1934 году в кировской районной газете «Кировец» и альманахе «Ударники» (стихотворении «Ураджайнае» и «Моладзі»). Член Союза писателей СССР с 1939 года. "},
  {time: "1939-1946", title: "Военные годы", desc: "С сентября 1939 по январь 1946 года служил специальным корреспондентом и писателем в армейских газетах. Принимал участие в Польском походе РККА 1939 года, во время Великой Отечественной войны был на фронтах – Брянском, Калининском и Северо-Западном. Работал во фронтовых газетах «За свабодную Беларусь», сатирической «Партызанскай дубінцы», а также в газете «Героический штурм». В 1943 году награждён медалью «За боевые заслуги». В 1944 году был в Иране."},
  {time: "1946-1966", title: "Послевоенные годы", desc: "После демобилизации в 1946 году вернулся в Минск и начал работать в журнале «Вожык». Позже перешёл в газету «Літаратура і мастацтва». С 1953 по 1958 годы работал редактором альманаха «Советская Отчизна». Возглавлял журнал «Маладосць». В 1966 году был назначен секретарём правления СП Белоруссии. Был депутатом ВС БССР 5, 6, 8 созывов."},
  {time: "1995", title: "Смерть", desc: "Умер 2 апреля 1995 года. Похоронен в Минске на Восточном кладбище."}
]

const SecondPage = ({ intl }) => (
  
  <Layout>
    
    <SEO title="Page two" />
    <h1>Hi, this is poet card</h1>
    <TimeLine info={info}/>
    <Video
      id="fvkncCBSxFI"
      intl={intl}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default injectIntl(SecondPage)