import Image from 'react-bootstrap/Image';
import blank from '../assets/images/BlankAvatar.jpg'
const Avatar = ({img}) => {
  const setImg = img ? img : blank
  return (
    <Image className="img-fluid" src={setImg} rounded />
  )
}

export default Avatar