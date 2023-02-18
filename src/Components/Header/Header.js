import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header() {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="./img/logo.png" width={40} height={40}/>
      <div className='leftHeaderText'>
      <h1>Ковры</h1>
      <p>Магазин лучших ковров</p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <img src="/img/Group.png" width={20} height={20}/>
      <span>0 р.</span>
      <img src="/img/Union.svg" width={20} height={20}/>
      <img src="/img/Favorite.svg" width={20} height={20}/>
      </div>
      </Stack>
    </div>

  }

export default Header