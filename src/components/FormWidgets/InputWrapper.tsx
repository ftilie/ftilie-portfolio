import { TextField } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";

export const InputWrapper = (props: WidgetProps): JSX.Element => {
    const onChange = (event: any) => {
        props.onChange(event.target.value);
    };

    return (
        <TextField
            id={props.options.widgetTitle + "-textInputWidget"}
            label={`${props.options.widgetTitle} ${props.required ? "*" : ""}`}
            value={props.value ?? ""}
            placeholder={`${props.options.widgetTitle as string}...`}
            onChange={onChange}
            error={props.rawErrors && props.rawErrors.length > 0}
        />
    );
};
