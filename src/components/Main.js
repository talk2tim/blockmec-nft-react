import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] = useState(punkListData[0])
    // src='https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'

    // They are using image_original_url. i am using image_preview_url

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
  return (
    <div className="main">
        <div className="mainContent">
            <div className="punkHighlight">
                <div className="punkContainer">
                    <img 
                        className="selectedPunk" 
                        src={activePunk.image_preview_url} 
                        alt="activePunk" 
                    />
                </div>
            </div>

            <div className="punkDetails" style={{ color: 'white' }}>
              <div className="title">
                {activePunk.name}
              
              <span className="itemNumber"> #{activePunk.token_id}</span>
           </div>

        <div className="owner">
            <div className="ownerImageContainer">
                <img 
                    src={activePunk.owner.profile_img_url} 
                    alt="ownerImage" className="ownerImage" 
                />
            </div>

            <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                    <div className="ownerAddress">{activePunk.owner.address}</div>
                    <div className="ownerHandle">@kingslayerv2.1</div>
                </div>

                <div className="ownerLink">
                    <img src={instagramLogo} alt="instagram" className="instagram" />
                </div>

                <div className="ownerLink">
                    <img src={twitterLogo} alt="instagram" className="twitter" />
                </div>

                <div className="ownerLink">
                    <img src={moreIcon} alt="moreIcon" className="moreIcon" />
                </div>
            </div>
            </div>


        </div>
    </div>
    </div>
  )
}

export default Main