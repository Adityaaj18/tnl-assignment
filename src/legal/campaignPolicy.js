import axios from "axios";
import React, { useState, useEffect } from "react";
import { duration } from "../utils/countdown";

const baseURL = process.env.REACT_APP_URL;

export default function CampaignPolicy({ data }) {
  const [info, setInfo] = useState();
  useEffect(() => {
    async function fetchAdAccountInfo() {
      const res = await axios.get(baseURL + `/ad-accounts/${data.ad_account}/`);
      setInfo(res.data);
    }
    fetchAdAccountInfo();
  }, [data]);

  return (
    <div className="campaign-legal">
      <p>CAMPAIGN TERMS AND CONDITIONS</p>
      <p>
        Valid from the Starting Date of Campaign as Mentioned on StreamPala.com
      </p>
      <p>&nbsp;</p>
      <p style={{ backgroundColor: "yellow" }}>{info?.brand_name}</p>
      <p>Brand message automated and placed from the campaign setup</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>
        <br />
      </p>
      <p>Campaign Details:</p>
      <ul>
        <li>
          <p>
            By Registering for this campaign, you have a chance to earn INR{" "}
            <strong>{data?.budget}</strong> for every{" "}
            <strong>{data?.budget * 2}</strong> from your content.
          </p>
        </li>
        <li>
          <p>
            Campaign Duration:{" "}
            <strong>{duration(data.start_date, data.end_date)}</strong> Days
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>Campaign Terms &amp; Conditions:</p>
      <ol>
        <li>
          <p>General Terms:</p>
        </li>
      </ol>
      <p>
        This contract is between you and the advertiser, and enforced by
        StreamPala. This campaign contract is governed by, and superseded by,
        the StreamPala&nbsp;Terms of Use.&nbsp;By Registering for this campaign,
        you agree to lease space on your content channels using the StreamPala
        software. By doing so, you allow the advertiser to embed their content
        (creative) as part of your content and/or channel.
      </p>
      <p>
        <br />
      </p>
      <ol start="2">
        <li>
          <p>Duration:</p>
        </li>
      </ol>
      <p>
        The campaign will start and end on the date as mentioned in this
        Campaign Card. These dates may change at any point of time before or
        during the campaign. Any changes in the campaign dates or duration will
        be visible on this Campaign Card as well as the Campaign Preview Card on
        the Campaigns Marketplace page.
      </p>
      <p>
        <br />
      </p>
      <ol start="3">
        <li>
          <p>Your Participation:</p>
          <ol>
            <li>
              <p>
                Registration: You may start, pause or end your participation in
                this campaign at any time until the end of the campaign
                duration.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Advertiser rights: The advertiser, based upon their judgement,
                may request StreamPala to block or prevent creators from
                campaign participation. This decision rests solely in the hands
                of the advertiser. StreamPala in no way influences advertisers
                to pick or drop any creator from the platform.
              </p>
            </li>
            <li>
              <p>
                StreamPala&rsquo;s rights: Your participation is governed by
                StreamPala&rsquo;s efforts to maximize gains (visibility,
                conversions etc) for advertisers. StreamPala may set limits on
                earning per user or earning per day that may affect your
                participation. These efforts are applicable identically to all
                StreamPala users.
              </p>
            </li>
          </ol>
        </li>
      </ol>
      <p>
        <br />
      </p>
      <ol start="4">
        <li>
          <p>Renumeration:</p>
          <ol>
            <li>
              <p>
                Earning: You will be paid as per the renumeration details
                mentioned on the (Top Right of) campaign card. Your earning is
                strictly based upon the parameters mentioned on the campaign
                card (for example earn per view, or, earn per click) and subject
                to data shared from your channel platform (for example YouTube
                or Instagram) to the StreamPala platform.
              </p>
            </li>
            <li>
              <p>
                Payouts: Payment for your participation in the campaign will
                reflect in your StreamPala wallet upon completion of the
                &nbsp;campaign, and is subject to the advertiser&rsquo;s
                clearance of StreamPala&rsquo;s invoices.
              </p>
            </li>
          </ol>
        </li>
      </ol>
      <p>
        <br />
      </p>
      <ol start="5">
        <li>
          <p>Campaign Malpractice plus Dos and Don&rsquo;ts:</p>
          <ol>
            <li>
              <p>
                Fair usage: You commit to using authenticate means to
                participate and earn from this campaign. The usage of bots,
                tools and other unfair means to garner viewership in this
                campaign is strictly prohibited.
              </p>
            </li>
            <li>
              <p>Participation in Good faith:&nbsp;</p>
              <ol>
                <li>
                  <p>
                    You commit to not mention, endorse or display any
                    non-competing brand or product in your content during the
                    campaign period.&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    You commit to not mention or display the brand in bad light
                    in the duration of the campaign, including bad-mouthing of
                    the brand&rsquo;s product or service.&nbsp;
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                No vulgarity and good manners: You commit to enforce socially
                acceptable behavior and verbiage during your participation in
                this campaign.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Safeguards against Campaign Malpractice: Failure to follow
                campaign guidelines, as stated above, may result in one or all
                of the following actions:
              </p>
              <ol>
                <li>
                  <p>forfeiture of campaign payouts,&nbsp;</p>
                </li>
                <li>
                  <p>ban from further participation in the campaign,</p>
                </li>
                <li>
                  <p>
                    permanent blacklist from the advertiser&rsquo;s campaign,
                  </p>
                </li>
                <li>
                  <p>permanent ban from the StreamPala platform.</p>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <p>
        In case you believe you have been unfairly held guilty of campaign
        malpractice, you may appeal the action by writing to
        contact@streampala.com with APPEAL in the subject line.
      </p>
      <p>
        <br />
      </p>
      <ol start="6">
        <li>
          <p>Ownership of Content:&nbsp;</p>
        </li>
      </ol>
      <p>
        The final content created on your channel will belong to you, but you
        agree to share rights with the advertiser to showcase and re-use your
        content that features this campaign.
      </p>
      <p>
        StreamPala may include some (snippets) or all of your content to
        showcase to advertisers, investors or general media as case studies,
        award submissions or product demonstrations.
      </p>
      <p>
        <br />
      </p>
      <ol start="7">
        <li>
          <p>Your Data:&nbsp;</p>
        </li>
      </ol>
      <p>
        By signing up for the campaign, the advertiser may get access to your
        public content channel data including, but not limited to, your
        Username, Profile image, Views, Views on Ads, Clicks on advertiser
        links, Subscribers etc.&nbsp;
      </p>
      <p>
        StreamPala does not share your personally identifiable data such as
        phone number or email with advertisers.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <ol start="8">
        <li>
          <p>
            StreamPala does not endorse the views, products or services or
            advertisers, brands or their organizations.
          </p>
        </li>
      </ol>
      <p>
        <br />
      </p>
      <ol start="9">
        <li>
          <p>
            Any confusion, complaints and dispute resolution will be governed as
            per StreamPala Terms of Use
          </p>
        </li>
      </ol>
      <p>
        <br />
      </p>
    </div>
  );
}
