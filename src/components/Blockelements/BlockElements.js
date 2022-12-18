import React from 'react'
import "./Blockelements.css";
import Button from 'react-bootstrap/Button';


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
    {
      txId:"0x999272727171",
      from:"0x87865s6a5s6as",
      to:"0x8us8su8q",
      ethValue:"0.6"
    },
    {
      txId:"0x999272727171",
      from:"0x87865s6a5s6as",
      to:"0x8us8su8q",
      ethValue:"0.6"
    },
    {
      txId:"0x999272727171",
      from:"0x87865s6a5s6as",
      to:"0x8us8su8q",
      ethValue:"0.6"
    },
    {
      txId:"0x999272727171",
      from:"0x87865s6a5s6as",
      to:"0x8us8su8q",
      ethValue:"0.6"
    }, {
      txId:"0x999272727171",
      from:"0x87865s6a5s6as",
      to:"0x8us8su8q",
      ethValue:"0.6"
    }
  ]
  return (
    <div>
        <section className='block-elements'>
          <div className='left-side'>
              <div>
                <h2 className='head'>Latest Blocks</h2>
                <hr></hr>
              </div>
              {
                latestBlocks.map((data, index) => {
                  return(
                    <div className='blocks-divs' key={index}>
                      <div className='icon-div'>
                        <span className='block-icon'>
                          Block
                        </span>
                        <div>
                          <span style={{color:"blue"}}>{data.id}</span>
                          <p>10 sec ago</p>
                        </div>
                      </div>
                      <div>
                        From:<span style={{color:"blue"}}>{data.feeRecipent}</span>
                        <p>10 sec ago</p>
                      </div>
                      <div>
                        <span style={{color:"blue"}}>{data.ethValue}</span>
                        <p>10 sec ago</p>
                      </div>
                    </div>
                  )
                })
              }

              <div className="d-grid gap-1 block-btn">
                <Button variant="primary" size="lg">
                  View More Blocks
                </Button>
              </div>
            
          </div>
        <div className='right-side'>
            <div>
            <h2 className='head'>Latest Transactions</h2>
            <hr></hr>
            </div>
            {
              latestTransactions.map((data, index) => {
                return(
                    <div className='blocks-divs' key={index}>
                      <div className='icon-div'>
                        <span className='block-icon'>
                          Trx
                        </span>
                        <div>
                          <span style={{color:"blue"}}>{data.txId}</span>
                          <p>10 sec ago</p>
                        </div>
                      </div>
                      <div>
                        From:<span style={{color:"blue"}}>{data.from}</span>
                        <p>10 sec ago</p>
                      </div>
                      <div>
                        <span style={{color:"blue"}}>{data.ethValue}</span>
                        <p>10 sec ago</p>
                      </div>
                    </div>
                  )
              })
            }
            <div className="d-grid gap-2 block-btn">
              <Button variant="primary" size="lg">
                View More Transactions
              </Button>
            </div>
        </div>
        </section>
    </div>
  )
}

export default BlockElements
