import React from 'react'
import "./Blockelements.css";

const BlockElements = () => {

  const latestBlocks = [
    {
      id:"12345",
      feeRecipent:"buildx09099",
      ethValue:"o.5"
    },
    {
      id:"678911",
      feeRecipent:"buildx09099",
      ethValue:"0.99"
    },
    {
      id:"657843",
      feeRecipent:"buildx09099",
      ethValue:"1.5"
    },
    {
      id:"8987678",
      feeRecipent:"buildx09099",
      ethValue:"2.2"
    },
    {
      id:"120098",
      feeRecipent:"buildx09099",
      ethValue:"3.04"
    }

  ];
  const latestTransactions = [

  ]
  return (
    <div>
        <section className='block-elements'>
        <div className='left-side'>
            <div>
            <h2 className='head'>Latest Blocks</h2>
            <hr></hr>
            </div>
            <div>
            <h1>Block First</h1>
            </div>
            <div>
            <h1>Block First</h1>
            </div>
            <div>
            <h1>Block First</h1>
            </div>
            <div>
            <h1>Block First</h1>
            </div>
        </div>
        <div className='right-side'>
            <div>
            <h2 className='head'>Latest Transactions</h2>
            <hr></hr>
            </div>
            <div>
            <h1>Transaction First</h1>
            </div>
            <div>
            <h1>Transaction First</h1>
            </div>
            <div>
            <h1>Transaction First</h1>
            </div>
            <div>
            <h1>Transaction First</h1>
            </div>

        </div>
        </section>
    </div>
  )
}

export default BlockElements
