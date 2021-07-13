
import "./doctor.module.css"
import { Card ,Row,Col} from 'antd';

const { Meta } = Card;
export default function Doctor() {


 
    return (
      <div>
          <Row gutter={16}>
      <Col className="gutter-row" span={6}>
       
      </Col>
      <Col className="gutter-row" span={6}>
       
      </Col>
      <Col className="gutter-row" span={6}>
        
      </Col>
      <Col className="gutter-row" span={6}>
      
      </Col>
    </Row>
         
         <Card
    hoverable
    style={{ width: 240 ,backgroundColor:"skyblue"}}
    cover={<img alt="example" src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,

      </div>

  
    )
}
