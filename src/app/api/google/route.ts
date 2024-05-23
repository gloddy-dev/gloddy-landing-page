import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

async function loadGoogleDoc() {
  try {
    const serviceAccountAuth = new JWT({
      key: process.env.GOOGLE_PRIVATE_KEY,
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID || '',
      serviceAccountAuth,
    );
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Error loading Google Doc:', error);
    throw new Error('Failed to load Google Doc');
  }
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const doc = await loadGoogleDoc();
    if (!doc)
      return NextResponse.json({ ok: false, error: '요청이 실패했습니다.' });

    let sheet = doc.sheetsByTitle['상담요청'];

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const koreaTimeDiff = 9 * 60 * 60 * 1000;

    await sheet.addRow({
      이메일: body.email,
      번호: body.phonenumber,
      기업명: body.company,
      이름: body.uname,
      '모집 유형': body.type,
      '선호 국가': body.country,
      '문의 내용': body.descinfo,
      '개인정보 수집 동의': body.privateInfo === true ? '동의' : '비동의',
      '요청 시간': new Date(utc + koreaTimeDiff).toLocaleString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
