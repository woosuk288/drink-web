import { Box, Typography } from '@mui/material'
import React from 'react'

function SectionC() {
  return (
    <Box mt="160px">
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{
          fontSize: { xs: 36, md: 50, lineHeight: 1.32, marginBottom: 60 },
        }}
      >
        드링크 뎁스의 프로젝트
      </Typography>

      <Typography variant="h4" margin="2rem 0">
        1. 우리가 만들어 가는 카페쇼 (진행중) {'<유통 환경에 활기를>'}
      </Typography>

      <Typography
        variant="h6"
        color="InfoText"
        fontWeight={400}
        sx={{ lineHeight: { xs: 1.3, md: 1.6 } }}
      >
        <p>
          음료 제조기업과 오프라인 카페와 티룸 들에게 필요한 b2bc 에이전시를
          온라인 형태로 지원합니다.
        </p>
        <br />
        <p>
          이는 음료 데이터 기반의 제품을 한곳에 경험함에 따라 귀사 테마에 필요한
          음료를 납품 받으세요.! 커피부터 티에 이르기 까지 서비스를 제공합니다.
        </p>
        <p>
          디테일한 음료 데이터태그의 활용과 검색으로 시행착오를 줄여보세요.!
        </p>
        <br />
      </Typography>

      <Typography variant="h4" margin="2rem 0">
        {'2. 음료 경험의 시행착오를 줄이다. <예정> '}
      </Typography>

      <Typography
        variant="h6"
        color="InfoText"
        fontWeight={400}
        sx={{ lineHeight: { xs: 1.3, md: 1.6 } }}
      >
        <p>음료 데이터 기반의 o2o 서비스를 지원합니다.</p>
        <p>
          스xxx 사이렌오더의 독립카페 버전 업그레이드 된 데이터 태그 기반 2세대
          o2o를 경험해 보세요.
        </p>
        <br />
        <p>
          더 이상 오프라인에서 고르는 음료가 나를 실망시켜 안마시고 버리게 되는
          것을 줄이고자 합니다. 여러분들의 다양한 음료의 도전의 시행착오를
          우리가 줄여드리겠습니다.
        </p>
        <br />
      </Typography>

      <Typography variant="h4" margin="2rem 0">
        {
          '3.독립 카페와 티룸이 프랜차이즈에 걸맞는 경쟁력을 가질수 있게. 창작환경을 지원하다.<예정>'
        }
      </Typography>

      <Typography
        variant="h6"
        color="InfoText"
        fontWeight={400}
        sx={{ lineHeight: { xs: 1.3, md: 1.6 } }}
      >
        <p>
          우리는 다양한 카페사장과 티룸 사장님들과 고민을 나누며 어떠한 점이
          필요한지 알게 되었으며 그중 창작환경에 대한 이야기를 많이 알게
          되었습니다.
        </p>
        <p>
          시장의 트렌드와 흐름에 따라 카페 티룸만의 차별성이 필요했으며
          제품개발도 하고싶은 니즈들이 많았지만 비용부담 장소의 제약등으로
          도전이 어려웠습니다.
        </p>
        <br />
        <p>
          지역구별 홈카페 관련 제조유통 시스템 설치와, 데이터 인사이트 제공으로
          독립카페 및 티룸의 홈카페나 다양한 고객층 확보를 위한 창작환경을
          지원예정입니다.
        </p>
        <br />
      </Typography>

      <Typography variant="h4" margin="2rem 0">
        {'4.장소와 시간의 제약을 없애다. 홈카페 지원 <예정>'}
      </Typography>

      <Typography
        variant="h6"
        color="InfoText"
        fontWeight={400}
        sx={{ lineHeight: { xs: 1.3, md: 1.6 } }}
      >
        <p>
          이제 내가 가던 로스터리를 우리집으로 옮길수 있을것입니다. 독립카페만의
          음료들을 직접 가지 않더라도 집에서 홈카페와 베이커리 등 다양한 지원
          서비스를 온라인으로 경험해보세요.!
        </p>

        <br />
      </Typography>
    </Box>
  )
}

export default SectionC