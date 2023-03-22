import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const BasicExample = () => {
  return (
    <Card style={{ width: '30rem' ,height: '30rem'}}>
      <Card.Img variant="centre" src="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg" />
      <Card.Body>
        <Card.Title>Become A Web Developer Today</Card.Title>
        <Card.Text>
          Some quick examples to help you build your own website.
        </Card.Text>
        <Button variant="primary">Start Learning</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;