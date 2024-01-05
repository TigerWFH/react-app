import { Component, lazy } from 'react';
import { render } from 'amis';

const LazyCom = lazy(() => import('./lazyCom.jsx'));

const json = {
  id: 'myCasePool_ID',
  type: 'page',
  data: {
    // LOOK: true,
    EXPORT: true,
    CASE_APPLY: true,
    CASE_PROGRESS_IMPORT: true,
    NEGOTIATE_REPAYMENT: true,
    selectedOrderNo: [],
    list: [
      {
        name: '11'
      }
    ]
  },
  body: [
    {
      id: 'myCasePool_crud_id',
      type: 'crud',
      primaryField: 'orderNo',
      syncLocation: false,
      autoFillHeight: { maxHeight: 800 },
      alwaysShowPagination: true,
      perPage: 20,
      filter: {
        title: '',
        submitText: '',
        mode: 'horizontal',
        id: 'form_ID',
        data: {
          isMultiple: false,
          multipleData: ''
        },
        body: [
          {
            type: 'group',
            mode: 'horizontal',
            body: [
              {
                name: 'batchNo',
                type: 'input-text',
                clearable: true,
                label: '批次号',
                placeholder: '请输入',
                columnRatio: 4
              },
              {
                name: 'orderNo',
                type: 'input-text',
                clearable: true,
                label: '订单号',
                placeholder: '请输入',
                columnRatio: 4
              },
              {
                type: 'input-group',
                name: 'input-group',
                label: 'uid',
                body: [
                  {
                    visibleOn: '${!isMultiple}',
                    id: 'input_ID',
                    type: 'input-text',
                    clearable: true,
                    name: 'uids',
                    placeholder: '请输入'
                  },
                  {
                    visibleOn: '${isMultiple}',
                    id: 'select_multiple_ID',
                    type: 'select',
                    name: 'uidsMultiple',
                    inputClassName: 'selectMultiple',
                    multiple: true,
                    onEvent: {
                      change: {
                        actions: [
                          {
                            actionType: 'setValue',
                            componentId: 'form_ID',
                            args: {
                              value: {
                                isMultiple: false,
                                multipleData: ''
                              }
                            }
                          }
                          // {
                          //   actionType: "custom",
                          //   script: (context, doAction, e) => {
                          //     setFormValue({
                          //       ...formValue,
                          //       multipleData: "",
                          //       uid: "",
                          //     });
                          //   },
                          // },
                        ]
                      }
                    }
                  },
                  {
                    icon: 'fa fa-th-list',
                    type: 'button',
                    actionType: 'dialog',
                    dialog: {
                      title: '批量筛选',
                      body: [
                        {
                          type: 'form',
                          className: 'batchFormTextarea',
                          onEvent: {
                            validateSucc: {
                              actions: [
                                {
                                  actionType: 'setValue',
                                  componentId: 'input_ID',
                                  args: {
                                    value: ''
                                  }
                                },
                                {
                                  actionType: 'setValue',
                                  componentId: 'form_ID',
                                  args: {
                                    value: {
                                      isMultiple: true
                                    }
                                  }
                                },
                                {
                                  actionType: 'setValue',
                                  componentId: 'select_multiple_ID',
                                  args: {
                                    value: '批量数据'
                                  }
                                },
                                {
                                  actionType: 'setValue',
                                  componentId: 'form_ID',
                                  args: {
                                    value: {
                                      multipleData: '${uidsDec}'
                                    }
                                  }
                                }
                                // {
                                //   actionType: 'custom',
                                //   script: (context, doAction, e) => {
                                //     const value = e.data;
                                //     const uid = value?.uidsDec
                                //       ?.split('\n')
                                //       ?.map((i) => i?.trim());

                                //     setFormValue({
                                //       ...formValue,
                                //       uid
                                //     });
                                //   }
                                // }
                              ]
                            }
                          },
                          body: [
                            {
                              type: 'tpl',
                              tpl: '请输入需要筛选的用户账号，每行一条，最大500条！'
                            },
                            {
                              required: true,
                              type: 'textarea',
                              name: 'uidsDec',
                              label: '',
                              validateOnChange: true
                            }
                          ]
                        }
                      ],
                      actions: [
                        {
                          type: 'action',
                          actionType: 'close',
                          label: '取 消'
                        },
                        {
                          type: 'button',
                          actionType: 'submit',
                          label: '确认',
                          primary: true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                name: 'customerName',
                type: 'input-text',
                clearable: true,
                label: '客户姓名',
                placeholder: '请输入',
                columnRatio: 4
              },
              {
                name: 'caseProcess',
                type: 'select',
                clearable: true,
                label: '案件进展',
                options: [],
                columnRatio: 4
              },
              {
                name: 'companyShortName',
                type: 'input-text',
                clearable: true,
                label: '公司简称',
                placeholder: '请输入',
                columnRatio: 4
              },
              {
                name: 'caseStatus',
                type: 'select',
                clearable: true,
                label: '案件状态',
                options: [],
                columnRatio: 4
              },
              {
                name: 'transferSubject',
                type: 'select',
                clearable: true,
                label: '债权主体',
                options: [],
                columnRatio: 4
              },
              {
                type: 'input-date-range',
                name: 'date',
                label: '委案到期日',
                format: 'YYYY-MM-DD',
                columnRatio: 4
              }
            ]
          }
        ]
      }
    }
  ]
};

class Other extends Component {
  constructor(props) {
    super(props);
    console.log('wfh---other---constructor');
  }
  render() {
    return (
      <>
        <h1>other</h1>
        {/* <LazyCom /> */}
        <div>{render(json, {}, {})}</div>
      </>
    );
  }
}

export default Other;
