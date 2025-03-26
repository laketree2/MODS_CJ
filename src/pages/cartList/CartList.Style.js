import styled from "styled-components";

export const SHeaderWrap = styled.div`
  margin-top: 5px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 20;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
`;

export const SBackBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  font-size: 20px;
  margin-right: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

export const SHeaderTitle = styled.h1`
  margin-left: 130px;
  font-size: 18px;
  font-weight: 600;
`;

export const SCartWrap = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 100px;
`;

export const SHeader = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 20;
  border-bottom: 1px solid #eee;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 0;
`;

export const STabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
  // margin-bottom: 8px;

  button {
    flex: 1;
    padding: 12px 0;
    font-size: 14px;
    color: #999;
    border: none;
    background: none;
    border-bottom: 2px solid transparent;

    &.active {
      color: #000;
      font-weight: 600;
      border-color: #000;
    }
  }
  border-bottom: 1px solid #eee;
`;

export const SSelectAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;

  .left {
    display: flex;
    align-items: center;

    input {
      margin-right: 8px;
    }

    span {
      font-size: 14px;
    }
  }

  .delete-btn {
    font-size: 13px;
    color: #888;
    background: none;
    border: none;
    cursor: pointer;
    border: 1px solid #eee;
  }
`;

export const SStoreBlock = styled.div`
  padding: 16px;
  border-bottom: 8px solid #f6f6f6;
`;

export const SStoreHeader = styled.label`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  // margin-bottom: 12px;

  input {
    margin-right: 8px;
  }
`;

export const SItemImageBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  // margin-bottom: 12px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const SFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-top: 1px solid #eee;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price {
    font-weight: 600;
    font-size: 16px;
  }

  .order-btn {
    background-color: #00c7ae;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    border: none;
    outline: none;
  }
`;
