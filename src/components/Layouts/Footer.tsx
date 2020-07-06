import React from 'react';

interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <>
      <div className="inner">
        <ul className="linkList">
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="">
              Link
            </a>
          </li>
        </ul>
        <div className="summary">Summary</div>
      </div>
      <div className="copyright">
        <p>
          Copyright 2020 <b>Dashboard</b>. All right reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
