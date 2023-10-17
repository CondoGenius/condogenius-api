﻿using CondoGenius_Reservations_Domain.Requests;
using Global.Shared.Database.Entities;

namespace CondoGenius_Reservations_Domain.Repository.Interfaces;

public interface IGuestListRepository
{
    Task<int> CreateGuest(CreateGuestListRequest request);
    Task<int> DeleteGuest(int id);
    Task<List<GuestList>> GetAllGuests();
    Task<List<GuestList>> ListGuestListByReservation(int id);
}