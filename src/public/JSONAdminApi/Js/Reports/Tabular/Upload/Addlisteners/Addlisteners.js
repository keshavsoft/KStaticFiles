let jFCloneFunc = () => {
    let jVarLocalUploadId = document.getElementById("UploadData");

    jVarLocalUploadId.addEventListener("click", jFLocalButtonClickFunc)
};

let jFLocalButtonClickFunc = async () => {
    let jVarLocalSelectFileId = document.getElementById("SelectFileId");
    let jVarLocalSelectedFile = jVarLocalSelectFileId.files[0];
    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    console.log("jVarLocalFromFile ", JSON.parse(jVarLocalFromFile));
};

let fileValidation = (file) => {
    console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/json") === false) {
        alert('Invalid file type');
        return false;
    }
};

let jVarLocalreadFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
};

let readFile = (file) => {
    // Check if the file is an image.
    // if (file.type && !file.type.startsWith('image/')) {
    //     console.log('File is not an image.', file.type, file);
    //     return;
    // }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {

        return event.target.result;
    });
    reader.readAsText(file);

};

let jFLocalClickFunc = async (event) => {
    let jvarLoclReportItemId = document.getElementById("ReportItem");

    let jVarLocalReportItemValue = jvarLoclReportItemId.value;

    let localReportConficObject = {
        "VouchersConsider": [
            {
                "pk": 1,
                "ItemName": "",
                "ColumnNameToPick": "",
                "JoinTables": [
                    {
                        "JT1": {
                            "JsonConfig": {
                                "UserFolderName": "",
                                "inFolderName": "Masters",
                                "inJsonFileName": "Accounts.json"
                            },
                            "DataPulled": []
                        }
                    }
                ],
                "Columns": [
                    {
                        "pk": 1,
                        "Name": [
                            "InvGrid.Amount",
                            "FinGrid.Amount"
                        ],
                        "DisplayColumn": "Credit",
                        "TransformType": "ObjectToArrayMultipleColumnsGroupByAndEvalPositive",
                        "JoinTable": "",
                        "PullKey": "",
                        "JoinFromCondition": "",
                        "JoinToCondition": "",
                        "ConsiderJoinTable": false,
                        "DefaultValue": "{{VoucherSign}}",
                        "TransformTF": true
                    }
                ],
                "JoinTablesColumns": [
                    {
                        "pk": 1,
                        "Name": "AccountName",
                        "DisplayColumn": "AccountName",
                        "TransformType": "",
                        "ConsiderJoinTable": true,
                        "JoinTable": "JT1",
                        "PullKey": "Accounts",
                        "JoinFromCondition": "AccountCode",
                        "JoinToCondition": "pk"
                    }
                ],
                "FolderName": "Transactions",
                "FileName": "RECEIPTS.json",
                "ColumnName": "",
                "Active": false,
                "ItemNameConsider": false,
                "FromFolder": true,
                "ReportConfig": {
                    "GroupBy": {
                        "KTF": false,
                        "ColumnName": "",
                        "ColumnsDataFreezed": [],
                        "ColumnsToGroupByAsFloat": []
                    }
                }
            }
        ],
        "TableColumns": [
            {
                "pk": 1,
                "DisplayName": "AccountName",
                "DataAttribute": "AccountName",
                "CreateNew": true,
                "Insert": true,
                "ShowInTable": true,
                "ParentClasses": {
                    "Parent1Class": "col-md-2",
                    "Parent2Class": "col-md-4",
                    "Parent3Class": "col-md-12"
                },
                "DefaultValue": "",
                "DefaultValueCreate": {
                    "ControlType": "Number",
                    "Type": "Max",
                    "StartValue": 16
                },
                "KDataset": {
                    "HTMLControlType": "",
                    "SaveCheck": {
                        "Validate": true,
                        "Type": "Unique"
                    },
                    "OrderNumber": null
                },
                "SaveOnEnter": true,
                "Widths": {
                    "px": "75",
                    "OrderNumber": null
                },
                "isDate": false,
                "isToggle": false,
                "TextAlign": "",
                "OrderNumber": "1",
                "KDatasetStuff": {},
                "HtmlAttributes": {},
                "ShowTotal": false,
                "EnterToServer": false,
                "ServerSide": {
                    "DefaultValueCreate": {},
                    "DefaultValueShow": {},
                    "SaveCheck": {},
                    "DefaultShowData": {},
                    "TransformBeforeSave": {},
                    "EnterToServer": {}
                },
                "DisplayType": {},
                "KDataAttributes": {},
                "Footer": {
                    "Show": {
                        "Balance": {}
                    }
                }
            }
        ],
        "TableInfo": {
            "SearchRowArray": {
                "Label": {
                    "KTF": true,
                    "DisplayObject": {
                        "DisplayText": "Ledger",
                        "ColClass": "md-6 col-sm-12 col-12"
                    }
                },
                "Search": {
                    "KTF": false,
                    "DisplayObject": {
                        "DisplayText": "Reports Search",
                        "ColClass": "md-4 col-sm-8 col-12"
                    }
                },
                "SearchWithEnter": {
                    "KTF": true,
                    "DisplayObject": {
                        "DisplayText": "SearchWithEnter",
                        "ColClass": "md-4 col-sm-4 col-12"
                    }
                },
                "Button": {
                    "PrintToPrinter": {
                        "Double": false,
                        "DisplayObject": {
                            "ColClass": "md-2"
                        }
                    },
                    "TableBulk": {
                        "Show": {
                            "KTF": false,
                            "DisplayObject": {
                                "ColClass": "md-2"
                            }
                        },
                        "Update": {
                            "KTF": false,
                            "DisplayObject": {
                                "ColClass": "md-2"
                            }
                        }
                    },
                    "NewWindow": {
                        "WithApi": {
                            "DisplayObject": {
                                "ColClass": ""
                            },
                            "KTF": false
                        },
                        "WithApiNew": {
                            "DisplayObject": {
                                "ColClass": ""
                            },
                            "KTF": false
                        },
                        "ApiToServer": {
                            "DisplayObject": {
                                "ColClass": "md-1"
                            },
                            "KTF": false
                        }
                    }
                }
            },
            "DataAttributes": {
                "QueryName": "",
                "JsonItemName": "",
                "JsonType": "Transactions",
                "InsertKey": ""
            },
            "Vertical": {
                "VerticalCreate": {
                    "save": false,
                    "saveNew": false,
                    "saveNewReturnData": false,
                    "saveFromKeyAsTree": false
                }
            },
            "TableRowOptions": {
                "Copy": {
                    "KTF": false
                },
                "Delete": {
                    "RowDelete": false,
                    "JSON": false,
                    "RowDeleteJSON": false,
                    "RowDeleteInPopUp": {},
                    "DeleteForKeyAsTree": false
                },
                "Edit": {
                    "RowEdit": false,
                    "RowEditWithUi": false,
                    "RowEditForJSON": false
                },
                "CreateNew": {
                    "RowCreateNew": false
                },
                "Show": {
                    "RowShow": false,
                    "RowDetails": false,
                    "RowShowAll": false,
                    "KeyAsTree": false
                },
                "InvGrid": {
                    "RowInvGrid": false
                },
                "BarcodePrint": {
                    "SVJP": false
                },
                "BillSave": {
                    "Edit": false
                },
                "Design": false
            },
            "Footer": {
                "Show": {
                    "Balance": {
                        "ShowTF": true,
                        "Columns": "{{Credit}}-{{Debit}}"
                    }
                }
            },
            "FooterType": {
                "CreateNew": false,
                "CreateNewRow": {
                    "Style": "display:none",
                    "Show": true
                },
                "ShowTotals": true,
                "ShowBalance": true
            },
            "ShowFooter": true,
            "ParentClasses": {
                "Parent1Class": "col-md-8",
                "Parent2Class": "col-md-4",
                "Parent3Class": "col-md-12"
            },
            "DataAttributesFromTableInfo": false,
            "DataAttributesFromTableDataRow": true
        },
        "DisplayColumns": {
            "Date": "",
            "CustomerCode": "",
            "RefNo": "B.F.",
            "Credit": 0,
            "Debit": 0
        },
        "ColumnsConfig": {
            "layer": 1,
            "columns": [
                {
                    "DataAttribute": "Date",
                    "ColumnDefaults": {
                        "DisplayName": "Date",
                        "Width": 10
                    }
                },
                {
                    "DataAttribute": "RefNo",
                    "ColumnDefaults": {
                        "DisplayName": "RefNo",
                        "Width": 30
                    }
                },
                {
                    "DataAttribute": "Amount",
                    "ColumnDefaults": {
                        "DisplayName": "Amount",
                        "Width": 10,
                        "TextAlign": "Right",
                        "ShowTotal": "Yes",
                        "ShowBalanceTF": "Yes",
                        "ShowBalance": {
                            "REC WEIGHT": "M",
                            "PAID WEIGHT": "P"
                        }
                    }
                }
            ]
        },
        "FilterColumns": [
            {
                "DataAttribute": "Date",
                "DisplayDataAttribute": "FromDate",
                "DataType": "Date"
            }
        ],
        "DisplayColumnsToUI": {
            "Date": "",
            "RefNo": "",
            "Amount": 0,
            "Credit": 0,
            "Debit": 0
        },
        "DisplayColumnsTransform": [
            {
                "ColumnName": "Date",
                "ColumnNameTransform": "DateForSort",
                "TransformType": "Moment"
            }
        ],
        "ColumnsTransformBeforeUIS": [
            {
                "ColumnName": "Amount",
                "ColumnNameTransform": "Amount",
                "TransformType": "IndianAmount"
            }
        ],
        "OrderByColumns": [
            "Date"
        ]
    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/Reports/ledgerAutoJsonFile/Utilities/import";
    let jVarLocalRequestHeader = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ToName: jVarLocalReportItemValue,
            ReportConficObject: localReportConficObject
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = `?inReportName=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;
            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { jFCloneFunc };