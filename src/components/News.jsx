import { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
    constructor(){
        super();
        
    }

    render() {
        let { pageTitle } = this.props
        return (
            <div className='mx-5 my-4'>
                <h1 className='text-3xl font-semibold text-center'>NewsWave - {pageTitle}</h1>
                <div className='flex flex-wrap justify-center space-x-2 my-2'>
                    <NewsItem title="Breaking News"
                        imgUrl="https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lacinia turpis." />
                    <NewsItem title="Breaking News"
                        imgUrl="https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lacinia turpis." />
                    <NewsItem title="Breaking News"
                        imgUrl="https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lacinia turpis." />
                    <NewsItem title="Breaking News"
                        imgUrl="https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lacinia turpis." />
                </div>
            </div>
        )
    }
}
