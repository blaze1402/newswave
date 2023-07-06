import { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "WGAL Susquehanna Valley Pa."
      },
      "author": null,
      "title": "Sheetz drops gas prices to $1.776 a gallon for Fourth of July - WGAL Susquehanna Valley Pa.",
      "description": "The limited time promotion will begin at 12:01 a.m., and will last all day, or while promotional gallons last.",
      "url": "https://www.wgal.com/article/sheetz-drops-gas-prices-dollar1776-gallon-fourth-of-july/44419414",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/rhhz789d-64a2fb8118302.jpeg?crop=1.00xw:0.752xh;0,0.159xh&resize=1200:*",
      "publishedAt": "2023-07-04T10:35:00Z",
      "content": "ALTOONA, Pa. —Sheetz announced it will celebrate the Fourth of July by reducing its gas prices to $1.776 a gallon. This reduced pricing commemorates the year when the Declaration of Independence was … [+908 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "LIVE: NBC News NOW - July 4 - NBC News",
      "description": null,
      "url": "https://www.youtube.com/watch?v=wxOgCJLW1CU",
      "urlToImage": null,
      "publishedAt": "2023-07-04T10:00:52Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Philadelphia shooting: Five killed and two wounded after man opens fire - BBC",
      "description": "He has no known connection to the victims and the shooting on Monday appears to have been random.",
      "url": "https://www.bbc.com/news/world-us-canada-66061204",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8802/production/_130281843_gettyimages-1481869939.jpg",
      "publishedAt": "2023-07-04T09:45:54Z",
      "content": "Five people have been killed and two children wounded after a man wearing a bullet-proof vest opened fire in the US city of Philadelphia.\r\nThe suspected attacker, a 40-year-old man who is now in cust… [+2401 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Mohamad El Chamaa",
      "title": "Activists in Lebanon are fighting to reclaim dwindling public spaces - The Washington Post",
      "description": "In Lebanon, where people are reeling from an economic crisis and desperate to breathe, open spaces are often shuttered or reserved for those who can pay.",
      "url": "https://www.washingtonpost.com/world/2023/07/04/lebanon-economic-crisis-urban-planning/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLNEBID3OQUSPOJLDK2H42GTZQ_size-normalized.jpg&w=1440",
      "publishedAt": "2023-07-04T09:00:00Z",
      "content": "Comment on this story\r\nComment\r\nBEIRUT To get to a park in Karantina, an impoverished neighborhood near this citys blast-destroyed port, two children on a recent day had to climb a utility pole and j… [+5542 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jay Peters, Jon Porter",
      "title": "Instagram’s Twitter-like Threads app looks set to launch July 6th - The Verge",
      "description": "Meta’s Twitter competitor, Instagram Threads, will launch on July 6th, according to an App Store listing for the app. The Twitter competitor could launch as many people are extremely unhappy with Twitter itself.",
      "url": "https://www.theverge.com/2023/7/3/23783227/meta-instagram-threads-twitter-competitor-app-store",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/I6KD9eSim4FpeXtWxcM_yUrgx0E=/0x0:1125x957/1200x628/filters:focal(564x413:565x414)/cdn.vox-cdn.com/uploads/chorus_asset/file/24769102/IMG_3454.jpeg",
      "publishedAt": "2023-07-04T08:08:17Z",
      "content": "Instagrams Twitter competitor launches July 6th\r\nInstagrams Twitter competitor launches July 6th\r\n / If you want to bail on Twitter, you might not have to wait long to download Instagram Threads.\r\nTh… [+3808 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WYFF4 Greenville"
      },
      "author": null,
      "title": "North Carolina State Trooper injured, suspect killed in shooting, investigators say - WYFF4 Greenville",
      "description": "Shooting happened Monday night",
      "url": "https://www.wyff4.com/article/north-carolina-state-trooper-injured-suspect-killed-in-shooting-investigators-say/44425288",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wyff/6294600-6294600.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*",
      "publishedAt": "2023-07-04T07:41:00Z",
      "content": "BUNCOMBE COUNTY, N.C. —A shooting in Buncombe County, North Carolina, left a state trooper injured and a suspect dead, according to the North Carolina State Highway Patrol.\r\nInvestigators said the in… [+776 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Gabe Hauari",
      "title": "Nathan's Hot Dog Eating Contest 2023 time, channel: What to know about July 4th tradition - USA TODAY",
      "description": "The Nathan's Hot Dog Eating Contest is back this 4th of July. Here's everything you need to know about this year's competition.",
      "url": "https://www.usatoday.com/story/sports/2023/07/04/hot-dog-eating-contest-time-channel/70368317007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2022/07/05/USAT/a92e4ec3-bbf8-454a-9350-bba19eada009-hot_dog_contest_logo.jpg?crop=1911,1075,x8,y0&width=1911&height=1075&format=pjpg&auto=webp",
      "publishedAt": "2023-07-04T07:02:10Z",
      "content": "The annual tradition of watching competitive eaters furiously shove hot dogs in their mouths on the 4th of July continues this year as the Nathan's Hot Dog Eating Contest returns to Coney Island.\r\nWo… [+1797 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Suntimes.com"
      },
      "author": "Georgia Nicols",
      "title": "Horoscope for Tuesday, July 4, 2023 - Chicago Sun-Times",
      "description": null,
      "url": "https://chicago.suntimes.com/2023/7/4/23774622/horoscopes-today-tuesday-july-4-2023",
      "urlToImage": "https://cst.brightspotcdn.com/dims4/default/e1e0740/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F1lY10TmiZwOCMdD1S6GOuOZ8UGM%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24754164%2FGeorgia_mug.jpeg",
      "publishedAt": "2023-07-04T05:03:31Z",
      "content": "Moon Alert\r\nAvoid shopping or important decisions from 11:30 a.m. to 12:45 p.m. Chicago time. After that, the moon moves from Capricorn into Aquarius.\r\nAries (March 21-April 19)\r\nYou will enjoy the c… [+3794 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Push Square"
      },
      "author": "Khayl Adam",
      "title": "Persona 3 Reload Gets English Gameplay Reveal in Xbox-Flavoured Trailer - Push Square",
      "description": "But it is actually coming to PlayStation",
      "url": "https://www.pushsquare.com/news/2023/07/persona-3-reload-gets-english-gameplay-reveal-in-xbox-flavoured-trailer",
      "urlToImage": "https://images.pushsquare.com/a015b963b38a5/1280x720.jpg",
      "publishedAt": "2023-07-04T05:00:00Z",
      "content": "Subscribe to Push Square on YouTube\r\nWe got the English gameplay reveal of Persona 3 Reload at Anime Expo 2023, dressed in all the trappings of an Xbox exclusive (it's not). This is standard procedur… [+1024 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KOB"
      },
      "author": "Mesha Begay",
      "title": "APD identifies suspect of deadly shooting involving officers - KOB 4",
      "description": "Police say 25 year-old Jeramiah Salyards stabbed a victim inside his car near the McDonald's drive-thru at Lomas and San Pedro.",
      "url": "https://www.kob.com/new-mexico/apd-identifies-suspect-of-deadly-shooting-involving-officers/",
      "urlToImage": "https://www.kob.com/wp-content/uploads/akta/F96D6AE84D69B5E6FDA89C3FB78D326E.jpg",
      "publishedAt": "2023-07-04T04:23:20Z",
      "content": "ALBUQUERQUE, N.M. Theres new information about the deadly shooting involving Albuquerque police near a McDonald’s last week. \r\nAPD identified the victim as 25-year-old Jeramiah Salyards from Roswell.… [+526 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Shayna Baszler says it felt good to finally shut Ronda Rousey up: WWE Raw Talk, July 3, 2023 - WWE",
      "description": "Shayna Baszler revels in hearing her knee crack across Ronda Rousey’s face, Chelsea Green and Sonya Deville say Byron Saxton’s energy is too low and Intercon...",
      "url": "https://www.youtube.com/watch?v=NtsaQoyo2OM",
      "urlToImage": "https://i.ytimg.com/vi/NtsaQoyo2OM/maxresdefault.jpg",
      "publishedAt": "2023-07-04T04:15:03Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "New Era of Exoplanet Discovery: Direct Imaging of “Jupiter's Younger Sibling” - SciTechDaily",
      "description": "Scientists have used a technique called astrometry to directly image one of the lowest-mass planets, AF Lep b, orbiting a young Sun-like star. This method could revolutionize the way we discover extrasolar planets, especially those that are challenging to det…",
      "url": "https://scitechdaily.com/new-era-of-exoplanet-discovery-direct-imaging-of-jupiters-younger-sibling/",
      "urlToImage": "https://scitechdaily.com/images/Gas-Giant-Exoplanet-Concept-Illustration.jpg",
      "publishedAt": "2023-07-04T03:35:27Z",
      "content": "ByW. M. Keck ObservatoryJuly 3, 2023\r\nUsing the W. M. Keck Observatory, a team of astronomers led by Kyle Franson at the University of Texas at Austin has captured direct images of one of the lowest-… [+8449 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Harrison Smith",
      "title": "Susan Love, surgeon who crusaded against breast cancer, dies at 75 - The Washington Post",
      "description": "She co-founded the National Breast Cancer Coalition and sought to eradicate the disease, which remains the second deadliest cancer for women in the U.S.",
      "url": "https://www.washingtonpost.com/obituaries/2023/07/03/susan-love-dead-breast-cancer/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4TGKNTVQIRHTJE2HSOAN6E2PPI.JPG&w=1440",
      "publishedAt": "2023-07-04T03:28:16Z",
      "content": "Susan M. Love, an indefatigable surgeon, author and patient advocate who spent decades crusading against breast cancer, including as a co-founder of the National Breast Cancer Coalition, a grass-root… [+8314 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motorsport.com"
      },
      "author": "Andrew van Leeuwen",
      "title": "Van Gisbergen free to make NASCAR move in 2024 - Motorsport.com",
      "description": "Triple Eight won't stand in the way of a permanent move to NASCAR next season for Shane van Gisbergen.",
      "url": "https://www.motorsport.com/v8supercars/news/van-gisbergen-free-nascar-move-2024/10491265/",
      "urlToImage": "https://cdn-4.motorsport.com/images/amp/YEQgqy1Y/s6/shane-van-gisbergen-triple-eig.jpg",
      "publishedAt": "2023-07-04T03:13:41Z",
      "content": "The future of the three-time Supercars has been a hot topic for some time, based largely on his dissatisfaction with the new Gen3 cars.\r\nSpeculation of a move to the US has now been turbocharged by v… [+1609 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "hoopsrumors.com"
      },
      "author": null,
      "title": "Fischer's Latest: Lillard, Harden, Saric, Christopher, N. Powell - hoopsrumors.com",
      "description": "After a busy first two days of free agency on Friday and Saturday, the pace has slowed down on Sunday &hellip;",
      "url": "https://www.hoopsrumors.com/2023/07/fischers-latest-lillard-harden-saric-christopher-n-powell.html",
      "urlToImage": "https://cdn.hoopsrumors.com/files/2023/07/Damian-Lillard-Trail-Blazers-900x600.jpg",
      "publishedAt": "2023-07-04T02:00:28Z",
      "content": "Nets deal centers around Ben Simmons, so pick-centric.\r\nHeat deal centers around Herro.\r\nSixers aren’t dealing Maxey so its 3rd teams assets from a Harden deal, so nothing to move the needle.\r\nKnicks… [+841 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "James T. Areddy, Sha Hua",
      "title": "China Restricts Exports of Two Minerals Used in High-Performance Chips - The Wall Street Journal",
      "description": "Industry executives see export ban on gallium and germanium as retaliation over chip curbs by U.S. and others",
      "url": "https://www.wsj.com/articles/china-restricts-exports-of-two-metals-used-in-high-performance-chips-a649402b",
      "urlToImage": "https://images.wsj.net/im-811062/social",
      "publishedAt": "2023-07-04T01:28:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "OregonLive"
      },
      "author": "Aaron Fentress | The Oregonian/OregonLive",
      "title": "Damian Lillard remains a Portland Trail Blazer, for now - OregonLive",
      "description": "Lillard requested a trade on Saturday to the Miami Heat but nothing is imminent.",
      "url": "https://www.oregonlive.com/blazers/2023/07/damian-lillard-remains-a-portland-trail-blazer-for-now.html",
      "urlToImage": "https://www.oregonlive.com/resizer/NDEBR_KCFj-EXAIDO03arVhD-is=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4FKWILPYIJBFJHMTYNJJTAP7QU.jpg",
      "publishedAt": "2023-07-04T01:12:00Z",
      "content": "As of Monday evening, Damian Lillard remained a member of the Portland Trail Blazers.\r\nNo movement was made Monday on the Blazers executing Lillards trade request and an NBA source has told The Orego… [+1124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Brock Lesnar is BACK for Cody Rhodes! - WWE",
      "description": "",
      "url": "https://www.youtube.com/watch?v=ssIk7ONOG-0",
      "urlToImage": "https://i.ytimg.com/vi/ssIk7ONOG-0/maxresdefault.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYfyAsKD0wDw==&rs=AOn4CLAxSDk4XFEXiR3WrUus1IiooXDXFg",
      "publishedAt": "2023-07-04T00:35:53Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Harvard Crimson"
      },
      "author": null,
      "title": "Federal Complaint Says Harvard Legacy Preferences in Admissions Violate Civil Rights Act | News - Harvard Crimson",
      "description": "Three Black and Latinx groups filed a civil rights complaint against Harvard Monday morning alleging that the University’s consideration of legacy and donor preferences in the admissions process violates the Civil Rights Act of 1964.",
      "url": "https://www.thecrimson.com/article/2023/7/4/legacy-admissions-complaint/",
      "urlToImage": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2023/07/03/130749_1364383.jpg.2000x1333_q95_crop-smart_upscale.jpg",
      "publishedAt": "2023-07-03T23:42:16Z",
      "content": "Updated July 3, 2023, at 5:26 p.m.\r\nThree Black and Latinx groups filed a civil rights complaint against Harvard Monday morning alleging that the Universitys consideration of legacy and donor prefere… [+5528 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Elizabeth Wolfe, Melissa Alonso, Lauren Mascarenhas",
      "title": "Baltimore investigators searching for suspects in block party mass shooting that killed 2 and injured 28 others - CNN",
      "description": "Investigators in Baltimore are searching for multiple suspects in a mass shooting that turned a beloved annual neighborhood block party into chaos early Sunday, killing two people and injuring 28 others, most of whom were teens, officials said.",
      "url": "https://www.cnn.com/2023/07/03/us/baltimore-block-party-shooting-monday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230702173611-04-baltimore-shooting-070223.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-03T23:29:00Z",
      "content": "Investigators in Baltimore are searching for multiple suspects in a mass shooting that turned a beloved annual neighborhood block party into chaos early Sunday, killing two people and injuring 28 oth… [+6592 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }


  render() {
    let { pageTitle } = this.props
    return (
      <div className='mx-5 my-4'>
        <h1 className='text-3xl font-semibold text-center'>NewsWave - {pageTitle}</h1>
        <div className='flex flex-wrap justify-center space-x-2 my-2'>
          {this.state.articles.map(({ title, description, url, urlToImage }) => {
            return <NewsItem key={url}
              title={title}
              imgUrl={urlToImage ? urlToImage : "https://images.unsplash.com/photo-1614028480987-73081d86a38b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
              description={description}
              newsUrl={url}
            />
          })}
        </div>
      </div>
    )
  }
}

// News.PropTypes = {pageTitle:String}