
import './App.css'
import {Button, Layout, Typography} from "antd";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;
function App() {

  return (
    <Layout className={'layout_styles'}>
        <Layout.Header style={{padding:'0 20px'}}>
            <Title
                level={3}
                style={{color:'white'}}>  тумпурум </Title>
        </Layout.Header>
        <Layout.Content className={'content'}>
            <Title>Текущий счет</Title>
            <div>
                <Button type={'primary'} className={'primaryBtn'}>Увеличить</Button>
                <Button>Уменьшить</Button>
            </div>
        </Layout.Content>
        <Layout.Footer className={'footer'}>
            Просто текст для футера
        </Layout.Footer>

    </Layout>
  )
}

export default App
