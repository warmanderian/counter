import {Button, Input, Layout, Modal, notification, Typography} from "antd";
import {useEffect, useState} from "react";

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

export const Counter =() => {
    const [count, setCount] = useState(0);
    //
    const [maxValue, setMaxValue] = useState(10)
    const [minValue, setMinValue] = useState(0)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const plus = () => {
        if (count === maxValue) {
            notification.warning({
                message: "Предупреждение",
                description: 'Счетчик не может быть больше 10',
                placement: 'topRight'
            })
        } else {
            setCount(count + 1)
        }
    }

    const minus = () => {
        if (count === minValue) {
            notification.warning({
                message: "Предупреждение",
                description: 'Счетчик не может быть меньше 0',
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
                <Title>Текущий счет: {count}</Title>
                <div>
                    <Button type={'primary'}
                            className={'primaryBtn'}
                            onClick={plus}>
                        Увеличить
                    </Button>
                    <Button onClick={minus}>Уменьшить</Button>
                    <Button type={"primary"}
                            className={'primaryBtn'}
                            onClick={showModal}>
                        Задать
                    </Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className={'section_input'}>
                            <Text>Задать минимальное число</Text>
                            <Input type={'number'} placeholder={'Минимальное число'}/>
                        </div>
                        <div  className={'section_input'}>
                            <Text>Задать максимальное число</Text>
                            <Input type={'number'} placeholder={'Максимальное число'}/>
                        </div>

                    </Modal>
                </div>
            </Content>
            <Footer className={'footer'}>
                Просто текст для футера
            </Footer>

        </Layout>
    )

}