import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import TagIcon from '@mui/icons-material/Tag';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';

import Image from 'next/image';

function SectionContent() {
  return (
    <Box>
      <Box display="flex" justifyContent={'center'}>
        <Image
          src="/images/coffee_flavor.png"
          alt="landing-2"
          width={222}
          height={318}
        />
      </Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}
      >
        드링크뎁스를
        <div>왜 이용해야 할까요?</div>
      </Typography>

      <Typography variant="h6" fontWeight="400" align="center" gutterBottom>
        커피 전문점이 7만6000개 이상 늘어남에 따라 <br />
        고객 입장에서 음료 경험의 시행착오를 줄이는 것이 중요해졌습니다.
      </Typography>

      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          marginTop: '2rem',
          bgcolor: 'background.paper',
          '.MuiListItemText-primary': {
            fontSize: '1.5rem',
            fontWeight: 600,
          },
          '.MuiListItemText-secondary': {
            fontSize: '1rem',
          },
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: 'primary.main' }}>
              <TagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="음료 전문 모바일 메뉴판 "
            secondary={
              '오프라인 메뉴판은 구조상 복잡하여 한눈에 보았을 때 불편함을 줄수 있습니다. 모바일 음료 메뉴판으로 더욱 효율적인 메뉴판 구성을 경험해보세요.'
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#6AD7FF' }}>
              <MoneyOffIcon />
            </Avatar>
          </ListItemAvatar>
          {/* <ListItemButton>
                <ListItemIcon>
                  <MoneyOffIcon color="primary" fontSize="large" />
                </ListItemIcon>
              </ListItemButton> */}
          <ListItemText
            primary="모바일 메뉴판 주요 광고노출"
            secondary={
              '3주 기간동안 드링크뎁스 팀에서 광고 및 유효타겟 추적을 통해 신규고객 유치를 돕습니다.'
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: 'secondary.main' }}>
              <CoffeeMakerIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="메뉴 고민 끝"
            secondary={
              '음료전문 모바일 메뉴판이 연동된 오프라인 QR 메뉴판을 통해 사장님께서 추천해주시는 메뉴 및 리뷰를 노출.'
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
export default SectionContent;
