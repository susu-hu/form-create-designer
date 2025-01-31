import {localeProps} from '../../utils';

const name = 'col';

export default {
    name,
    label: '格子',
    drag: true,
    dragBtn: false,
    inside: true,
    mask: false,
    rule() {
        return {
            type: name,
            props: {span: 12},
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'slider', field: 'span', value: 12, props: {min: 0, max: 24}},
            {type: 'slider', field: 'offset', props: {min: 0, max: 24}}]);
    }
};
