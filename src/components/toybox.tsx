import {Button, Layout, notification, Typography} from "antd";
import {useState} from "react";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

export const Toybox = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(0)
    }

    const minus = () => {
        if (count === 0) {
            notification.warning({
                message: "Предупреждение",
                description: 'Игрушек не может быть меньше 0',
                placement: 'topRight'
            })
        } else {
            setCount(count - 1)
        }
    }
    return (
        <Layout className={'layout_styles'}>
            <Header style={{padding: '0 20px'}}>
                <Title
                    level={3}
                    style={{color: 'white'}}> тумпурум </Title>
            </Header>
            <Content className={'content'}>
                <Title>Игрушек: {count}</Title>
                <div>
                    <Button type={'primary'}
                            className={'primaryBtn'}
                            onClick={plus}>
                        Увеличить
                    </Button>
                    <Button onClick={minus}>Уменьшить</Button>
                    <Button onClick={reset}>Сбросить</Button>
                </div>
            </Content>
            <Footer className={'footer'}>
                Просто текст для футера
            </Footer>

        </Layout>
    )

}