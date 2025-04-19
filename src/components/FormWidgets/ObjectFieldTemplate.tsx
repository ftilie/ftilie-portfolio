import { Box, Button, Dialog, DialogContent, Divider, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import React, { useState } from "react";
import MuiMarkdown from "mui-markdown";
import IconLookup from "~/utils/IconLookup";

export const ObjectFieldTemplate = (props: ObjectFieldTemplateProps): JSX.Element => {
    const [hasHelpDialog, setHasHelpDialog] = useState(false);
    const [helpDialogTitle, setHelpDialogTitle] = useState("");
    const [helpDialogContents, setHelpDialogContents] = useState("");

    const toggleHelpDialog = (val: boolean) => {
        setHasHelpDialog(val);
    };

    const openHelpDialog = (dividerTitle: string, dividerInformation: string) => {
        setHelpDialogContents(dividerInformation);
        setHelpDialogTitle(dividerTitle);
        toggleHelpDialog(true);
    };

    const items = props.properties.map((element) => {
        const uiSchema = element.content.props.uiSchema;
        const gridSize = uiSchema?.["ui:options"]?.gridSize ?? 12;
        const dividerGridSize = uiSchema?.["ui:options"]?.dividerGridSize;
        const dividerTitle: string | undefined = uiSchema?.["ui:options"]?.dividerTitle;
        const dividerSubtitle: string | undefined = uiSchema?.["ui:options"]?.dividerSubtitle;
        const dividerIcon = uiSchema?.["ui:options"]?.dividerIcon ?? "";
        const dividerHelp = element.content.props.uiSchema?.["ui:options"]?.dividerHelp ?? "";

        const dividerHelpButton = () => {
            let helpButton = <></>;

            if (dividerHelp) {
                helpButton = (
                    <Tooltip title={dividerHelp.tooltip}>
                        <IconButton onClick={() => openHelpDialog(dividerTitle ?? "", dividerHelp.contents)}>
                            <IconLookup icon={dividerHelp.icon} />
                        </IconButton>
                    </Tooltip>
                );
            }

            return helpButton;
        };

        let divider = <></>;

        if (dividerTitle) {
            divider = (
                <Grid item xs={12}>
                    <Stack spacing={1} paddingTop={1} paddingBottom={1}>
                        <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                            <Stack direction="row" spacing={1} paddingTop={3} alignItems="center">
                                <IconLookup icon={dividerIcon} />
                                <Typography variant="h4">{dividerTitle.toUpperCase()}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Typography paddingTop={3}>{dividerSubtitle}</Typography>
                                {dividerHelpButton()}
                            </Stack>
                        </Stack>
                        <Divider />
                    </Stack>
                </Grid>
            );
        }

        return (
            <React.Fragment key={element.name}>
                {dividerGridSize ? (
                    <Grid container item xs={dividerGridSize} gap={4} paddingLeft={4}>
                        {divider}
                        <Grid item xs={gridSize}>
                            {element.content}
                        </Grid>
                    </Grid>
                ) : (
                    <>
                        {divider}
                        <Grid item xs={gridSize}>
                            {element.content}
                        </Grid>
                    </>
                )}
            </React.Fragment>
        );
    });

    const helpDialog = () => {
        let helpDialog = <></>;

        if (hasHelpDialog) {
            helpDialog = (
                <Dialog open={true} fullWidth={true} maxWidth="sm">
                    <DialogContent>
                        <Stack spacing={1}>
                            <Typography variant="h2" justifyContent="left">
                                {helpDialogTitle}
                            </Typography>
                            <Divider />
                            <MuiMarkdown>{helpDialogContents}</MuiMarkdown>
                            <Box alignSelf="flex-end">
                                <Button variant="outlined" onClick={() => toggleHelpDialog(false)}>
                                    Close
                                </Button>
                            </Box>
                        </Stack>
                    </DialogContent>
                </Dialog>
            );
        }

        return helpDialog;
    };

    return (
        <>
            <Grid container spacing={4}>
                {items}
                {helpDialog()}
            </Grid>
        </>
    );
};
