import {Button} from 'react-bootstrap';

export const TestButton = ({name}) => {
    return (
        <div className='TestButton'>
            <Button >{name}</Button>
            <Button variant= "primary" >Primary</Button>{' '}
            <Button variant= "secondary" >Secondary</Button>{' '}
        </div>
    )
}

export const PrimaryButton = () => {
    return (
        <div className='PrimaryButton'>
            <Button variant= "primary">Primary</Button>{' '}
        </div>
    )
}