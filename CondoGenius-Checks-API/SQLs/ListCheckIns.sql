﻿SELECT c.Id             as Id,
       c.common_area_id as CommonAreaId,
       c.resident_id    as ResidentId,
       c.created_at     as CreatedAt,
       r.name           as ResidentName,
       r.device_token   as DeviceToken
FROM check_in_common_area c
         INNER JOIN residents r on c.resident_id = r.id;