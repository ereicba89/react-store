import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

//nrvrdiysmod guardar el estado por lo tanto necesitamos un
//componente clase

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'guns',
          imageUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201804/601108641.jpg',
          id: 1,
          linkUrl: 'shop/guns'
        },
        {
          title: 'pistols',
          imageUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201804/601108641.jpg',
          id: 2,
          linkUrl: 'shop/pistols'
        },
        {
          title: 'rifle',
          imageUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201804/601108641.jpg',
          id: 3,
          linkUrl: 'shop/rifle'
        },
        {
          title: 'shotguns',
          imageUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201804/601108641.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/shotguns'
        },
        {
          title: 'knifes',
          imageUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201804/601108641.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/knifes'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, large }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={large}/>
        ))}
      </div>
    )
  }
}

export default Directory
