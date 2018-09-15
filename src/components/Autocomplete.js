import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import FormFeedback from 'reactstrap/lib/FormFeedback';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import '../styles/autocomplete-input.css';

export default class AutocompleteInput extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        errorMessage: PropTypes.string,
        list: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        onSelectItem: PropTypes.func,
        placeholder: PropTypes.string,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        bsSize: PropTypes.string,
        plaintext: PropTypes.bool,
        tag: PropTypes.string,
        disabled: PropTypes.bool,
        id: PropTypes.string.isRequired,
        wrapperClassName: PropTypes.string,
        clearOnSelect: PropTypes.bool,
        onChange: PropTypes.func,
        isAlphabetical: PropTypes.bool,
        showNoResults: PropTypes.bool
    }

    static defaultProps = {
        errorMessage: '',
        clearOnSelect: false,
        isAlphabetical: true
    }

    constructor(props) {
        super(props);

        const isExist = props.value
            ? props.list.filter((item) => item.toLowerCase() === props.value.toLowerCase()).length > 0
            : false;

        this.state = {
            isSelected: false,
            isExist,
            value: props.value || '',
            activeListItem: -1
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value && prevState.value.length === 1 && !this.state.value && this.props.onSelectItem) {
            this.props.onSelectItem('');
        }

        if (prevProps.value && !this.props.value) {
            this.setState({
                value: '',
                isSelected: false
            });
        }
    }

    handleKeyDown = (e) => {
        const results = this.input.nextSibling.childNodes;
        let { activeListItem } = this.state;

        if (e.keyCode === 38 || e.keyCode === 40) {
            if (e.keyCode === 38) {

                // handle UP key
                activeListItem = activeListItem === 0 ? results.length - 1 : activeListItem - 1;
            }
            else {

                // handle DOWN key
                activeListItem = (activeListItem + 1) === results.length ? 0 : activeListItem + 1;
            }

            this.setState({
                activeListItem
            });
        }
        else if (e.keyCode === 13) {

            // handle ENTER key
            if (!this.state.isSelected && results.length) {
                e.stopPropagation();
                e.preventDefault();

                results[activeListItem].click();
            }
        }
    }

    handleChange = (value, e) => {
        e && e.preventDefault();

        this.setState({
            value: value || e.target.value,
            isSelected: value ? true : false,
            isExist: false,
            activeListItem: -1
        });

        if (value && this.props.onSelectItem) {
            this.props.onSelectItem(value);

            if (this.props.clearOnSelect) {
                this.setState({
                    value: '',
                    isSelected: false
                });
            }

            return;
        }

        if (this.props.onChange && e) {
            this.props.onChange(e.target.value);
        }
    }

    filterList = (value) => {
        if (value) {
            return this.props.list.filter(item => {
                console.log(item, value)
                if (this.props.isAlphabetical) {
                    return item.toLowerCase().startsWith(value.toLowerCase());
                }

                return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
            });
        }

        return [];
    }

    render() {
        const { isExist, isSelected, value } = this.state;
        const filteredList = this.filterList(value);
        const isInvalid = this.props.errorMessage !== '';

        return (
            <FormGroup className={`mb-0 position-relative autocomplete-input ${this.props.wrapperClassName || ''} w-100`}>
                <Input
                    innerRef={(ref) => this.input = ref}
                    id={this.props.id}
                    className={`${this.props.className || ''} position-relative`}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder || ''}
                    value={this.state.value}
                    onChange={(e) => this.handleChange('', e)}
                    onKeyDown={this.handleKeyDown}
                    bsSize={this.props.bsSize}
                    invalid={isInvalid}
                    plaintext={this.props.plaintext ? this.props.plaintext : false}
                    tag={this.props.tag || null}
                    disabled={this.props.disabled ? this.props.disabled : false} />

                {(filteredList.length > 0 && !isSelected && !isExist) && (
                    <div className='autocomplete-input__list border'>
                        {filteredList.slice(0, 5).map((item, i) =>
                            <p
                                key={item}
                                className={`autocomplete-input__list-item text-left text-dark mt-0 ${i === this.state.activeListItem ? 'is-active' : ''}`}
                                onClick={(e) => this.handleChange(item, e)}>
                                {item}
                            </p>
                        )}
                    </div>
                )}

                {this.props.showNoResults && value.length > 3 && filteredList.length === 0
                    ? <div className='autocomplete-input__list border'>
                        <p
                            className='autocomplete-input__list-item text-left text-dark mt-0'>
                            No destination found
                        </p>
                    </div>
                    : null
                }

                <FormFeedback>{this.props.errorMessage}</FormFeedback>
            </FormGroup>
        );
    }
}
