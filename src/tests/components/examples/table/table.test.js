import {TableS} from "../../../../components/Examples/Table/Table";
import {shallow} from "enzyme";

jest.mock('react-redux');

// let props;
// function generateWrapper(passedProps) {
//     const defaultProps = {};
//     props = {...defaultProps, ...passedProps};
//     return shallow(<TableS {...props}/>);
// }

describe('it runs', function () {
    it('should renders', function () {
        const wrapper = shallow(<TableS />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should should run', function () {
        let data = [
            {
                cardCode: "",
                expireIn: "разово",
                countBuyAboniment: 0,
                fullName: "Берлизов Александр Николаевич",
                phone: "89883129436",
                course: "Бокс",
                dateFirsTrainer: "09.06.2020",
                address: "ул. Ангарская 2",
                birthday: "03.04.1989",
                howKnow: "асфальт"
            },
            {
                cardCode: "",
                expireIn: "разово",
                countBuyAboniment: 0,
                fullName: "Войтов Михаил Васильевич",
                phone: "89892677252",
                course: "Бокс",
                dateFirsTrainer: "12.11.2020",
                address: "ул. Героя Аверпиева д.26 кв.129",
                birthday: "08.09.1994",
                howKnow: "заявка с сайта"
            },
        ];
        let fullName = jest.fn();
        const wrapper = shallow(<TableS fullName={fullName} data={data}/>);

        expect(wrapper.find('tbody').children('tr').length).toBe(2);
        // console.log();
        expect(wrapper.find('tbody').children('tr').first().html()).toContain('Берлизов Александр Николаевич')
        wrapper.find('thead tr').children().at(3).simulate('click');
        expect(fullName).toBeCalledTimes(1);
    });
});