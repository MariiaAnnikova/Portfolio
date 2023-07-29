import React from 'react'
 import './portfolioCard.css'


 
export const PortfolioCard = ({ data }) => 
    <div className='portfolio_card'>
        <a href={data.link}>
            <img src={data.img} alt={data.img} />
        </a>
    </div>
 