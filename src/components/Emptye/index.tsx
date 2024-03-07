import { Empty,EmptyProps } from 'antd';

function MTLEmpty ({ }:EmptyProps){
    return (
        <>
          <Empty
            description={
              <span>
                暂无数据 <a href="#API">...</a>
              </span>
            }
          />
        </>
    );
}

export default MTLEmpty
