require('dotenv').config()


const nightmare = require('nightmare')()

const args = process.argv.slice(2)
const url = args[0] || 'https://www.google.com/search?q=%D7%AA%D7%97%D7%96%D7%99%D7%AA&sxsrf=ALeKk03Q1E_ZJA92aK99XQqCXu1mgfWoxQ%3A1617964807409&ei=By9wYKaYGKKB9u8PmY6byA4&oq=%D7%AA%D7%97%D7%96%D7%99%D7%AA&gs_lcp=Cgdnd3Mtd2l6EAMyDAgjECcQnQIQRhCAAjIECCMQJzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzINCAAQsQMQgwEQyQMQQzIFCAAQkgMyBQgAEJIDMggIABCxAxCDATIECAAQQzIICAAQsQMQgwE6BwgAEEcQsAM6BwgAELADEEM6BwgjECcQnQI6AggAUN1YWPVkYOdoaAVwAngBgAGAA4gBhQiSAQcwLjUuMC4xmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwjmt-rM_PDvAhWigP0HHRnHBukQ4dUDCA0&uact=5'
const minPrice = args[1]

// checkPrice()

async function checkPrice(req,res,next) {
    console.log("start search")
  try {
    const priceString = await nightmare.goto(url)
                                       .wait("#wob_wc")
                                       .evaluate(function() {
                                        return document.getElementById('wob_tci').src
                                                })
                                       .end()
    // const priceNumber = parseFloat(priceString.replace('%', ''))

        console.log(priceString)
        let is_rain;

        if(priceString == '//ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png'){
           is_rain = 'yes'
           console.log('weather rain')
       
        }else{
            is_rain = 'no'
            console.log('weather clear')
          

        }
        res.json({msg:is_rain})
       

  } catch (e) {
     console.log('bad val')
    throw e
  }
}

module.exports.checkPrice = checkPrice
// node weather.js 'https://www.google.com/search?q=%D7%AA%D7%97%D7%96%D7%99%D7%AA&sxsrf=ALeKk03Q1E_ZJA92aK99XQqCXu1mgfWoxQ%3A1617964807409&ei=By9wYKaYGKKB9u8PmY6byA4&oq=%D7%AA%D7%97%D7%96%D7%99%D7%AA&gs_lcp=Cgdnd3Mtd2l6EAMyDAgjECcQnQIQRhCAAjIECCMQJzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzINCAAQsQMQgwEQyQMQQzIFCAAQkgMyBQgAEJIDMggIABCxAxCDATIECAAQQzIICAAQsQMQgwE6BwgAEEcQsAM6BwgAELADEEM6BwgjECcQnQI6AggAUN1YWPVkYOdoaAVwAngBgAGAA4gBhQiSAQcwLjUuMC4xmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwjmt-rM_PDvAhWigP0HHRnHBukQ4dUDCA0&uact=5'