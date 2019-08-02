import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Button } from 'react-bootstrap';
import './bootstrap.min.css';

const languageName = {
  en: "English",
  ru: "Русский",
  be: "Беларуская",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <Button
              style={{
                margin: '5px',
                color: currentLocale === language ? '#ffef00' : '#FFFFFF'
              }}
              variant="primary"
              size="sm"
              key={language}
              onClick={() => changeLocale(language)}>
              {languageName[language]}
            </Button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language