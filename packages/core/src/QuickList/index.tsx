import React, { useState, useEffect, forwardRef, useImperativeHandle, Ref } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { emptyDataView, activityIndicatorView, noMoreDataView } from './View';

interface QuickListProps<ItemT> extends FlatListProps<ItemT> {
  onFetch: (params: any) => void; // 请求的接口 Promise 类型
  data: Array<any>; // 数据源 Array 类型
  renderItem: ListRenderItem<any>; // 渲染方法 Function 类型
  keyId: string | number; // 列表唯一 key
  emptyView?: void | any;
  pageSize?: number; // 每次加载数据条数
  total: number; // 总条数
  style?: Object;
}

export type QuickListComponent<ItemT = any> = (
  props: QuickListProps<ItemT>,
  ref?: Ref<FlatList<ItemT>> | any,
) => React.ReactElement;

const QuickList: QuickListComponent = (props, ref) => {
  const {
    onFetch, // 请求的接口 Promise 类型
    data, // 数据源 Array 类型
    renderItem = null, // 渲染方法 Function 类型
    keyId, // 列表唯一 key
    emptyView = emptyDataView,
    pageSize = 10, // 每次加载数据条数
    total = 0, // 总条数
    style,
    ...others
  } = props;
  const PaginationStatus = {
    firstLoad: 0, // 首次加载
    waiting: 1, // 等待中
    allLoaded: 2, // 全部加载完成
  };
  // 挂载状态
  let mounted = true;
  const [endReachedTime, setEndReachedTime] = useState(Date.now());
  // 首次加载标识
  const [firstLoader, setFirstLoader] = useState(true);
  // 上拉加载 loading
  const [loading, setLoading] = useState(false);
  // 下拉刷新 refreshing
  const [refreshing, setRefreshing] = useState(false);
  // 页数 page number
  const [page, setPage] = useState(1);
  // 初始页面状态
  const [paginationStatus, setPaginationStatus] = useState(PaginationStatus.firstLoad);

  // 暴露给父组件调用的方法
  useImperativeHandle(ref, (): any => ({
    executeRefreshAction: async (param = {}) => {
      setPage(1);
      const params = {
        page: 1,
        pageSize,
        ...param,
      };
      onFetch && (await onFetch(params));
    },
  }));

  useEffect(() => {
    // 挂载列表
    mounted = true;
    // 挂载完成首次执行加载
    firstLoader &&
      firstLoad().catch((error) => {
        console.error(error);
      });
    return () => {
      // 卸载列表
      mounted = false;
    };
  }, [firstLoader]);

  useEffect(() => {
    // 首次加载和总量为0时候直接返回
    if (firstLoader || total === 0) {
      return;
    }
    let maxPage = Math.ceil(total / pageSize);
    if (maxPage === page) {
      setPaginationStatus(PaginationStatus.allLoaded);
    } else {
      setPaginationStatus(PaginationStatus.waiting);
    }
  }, [page, total, firstLoader, pageSize]);

  const renderFooter = () => {
    if (total === 0) {
      return null;
    } else if (paginationStatus === PaginationStatus.waiting) {
      return activityIndicatorView;
    } else if (!loading && paginationStatus === PaginationStatus.allLoaded && total !== 0) {
      return noMoreDataView;
    }
  };

  const renderEmptyView = () => {
    if (!firstLoader && typeof emptyView === 'function') {
      return emptyView();
    }
    return null;
  };

  // 首次加载
  const firstLoad = async () => {
    if (paginationStatus === PaginationStatus.firstLoad) {
      setPage(1);
      setRefreshing(true);
      const params = {
        page: 1,
        pageSize,
        isRefresh: true,
      };
      await onFetch(params);
      setRefreshing(false);
      setFirstLoader(false);
    }
  };

  // 下拉刷新列表
  const onRefresh = async () => {
    if (mounted && !loading) {
      setPage(1);
      setRefreshing(true);
      const params = {
        page: 1,
        pageSize,
        isRefresh: true,
      };
      await onFetch(params);
      setRefreshing(false);
    }
  };

  // 上拉加载更多
  const onEndReached = async () => {
    if (
      paginationStatus === PaginationStatus.firstLoad ||
      paginationStatus === PaginationStatus.allLoaded ||
      refreshing ||
      loading
    ) {
      return;
    }
    setLoading(true);
    const params = {
      page: page + 1,
      pageSize,
      isRefresh: false,
    };
    await onFetch(params);
    setLoading(false);
    setPage(page + 1);
  };
  return (
    <FlatList
      {...others}
      ref={ref}
      onEndReachedThreshold={0.1}
      data={data}
      renderItem={renderItem}
      refreshing={refreshing}
      extraData={data}
      keyExtractor={(item) => item[keyId]}
      initialNumToRender={pageSize}
      onRefresh={onRefresh}
      onEndReached={() => {
        const now = Date.now();
        if (now - endReachedTime > 1000) {
          onEndReached && onEndReached();
          setEndReachedTime(now);
        }
      }}
      ListFooterComponent={renderFooter()}
      ListEmptyComponent={renderEmptyView()}
      style={style}
    />
  );
};
export default forwardRef(QuickList);
