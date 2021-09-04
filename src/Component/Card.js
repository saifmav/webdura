/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Steps from './Steps';
import person from '../Images/person.jpeg';
import Container from '@material-ui/core/Container';
import { slice, concat } from 'lodash'


export default function Card(props) {
  const dataLength = props.data.length
  const limitedData = props.limit

  const [showMore, setShowMore] = useState(true)
  const [list, setList] = useState(slice(props.data, 0, limitedData))
  const [index, setIndex] = useState(limitedData)

  const loadMore = () => {
    const newIndex = index + limitedData
    const newShowMore = newIndex < (dataLength - 1)
    const newList = concat(list, slice(props.data, index, newIndex))
    setIndex(newIndex)
    setList(newList)
    setShowMore(newShowMore)
  }


  const renderCard = list.map((data) => {
    return (
      <>
        {console.log('Hey', data.fields.name)}
        <Paper elevation={3}>
          <div className='container'>
            <div className='row '>
              <div className='col-12 col-md '>
                <div className='row'>
                  <div className='col-sm-6'>
                    <h2 style={{ color: 'darkgoldenrod', marginTop: '10px' }}>
                      {data.fields.status[1]}
                    </h2>
                    <p>11.25am,12/01/2019</p>
                    <img
                      src={person}
                      alt='person'
                      style={{
                        display: 'inline',
                        borderRadius: '50%',
                        height: '75px',
                      }}
                    />
                    <span style={{ fontWeight: 'bolder', color: 'teal' }}>
                      {data.fields.name}
                    </span>
                    <p
                      style={{
                        fontWeight: 'bolder',
                        marginLeft: '85px',
                        marginTop: '-32px',
                        fontSize: '12px',
                      }}
                    >
                      {data.fields.location}
                    </p>
                  </div>
                  <div className='col-sm-6'>
                    <Steps status={data.fields.status} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 'lighter',
                  width: '382px',
                }}
              >
                Check in here or scan customer's QR CODE to check in when the
                service is about to start
              </p>

              <p style={{ fontWeight: 'bold' }}>{data.fields.scheduled_at}</p>
              <p
                style={{
                  color: 'teal',
                  fontWeight: 'bold',
                  marginTop: '-15px',
                }}
              >
                {data.fields.address}
              </p>
            </div>
          </div>
        </Paper>
      </>
    )
  })

  return <Container maxWidth='sm'>
    {renderCard}
    {showMore && <button onClick={loadMore}> Load More </button>}
    </Container>;
}
